// A global variable to hold our FaceMatcher.
let faceMatcher = null;

// Helper function to safely get the video element created by Flutter.
function getVideoElement() {
    return document.querySelector("video");
}

// Loads all the required models from your web/models folder.
async function loadModels() {
    console.log("Attempting to load FaceAPI models...");
    try {
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
        await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        console.log("✅ All models loaded successfully.");
        return true;
    } catch (error) {
        console.error("❌ CRITICAL ERROR loading models:", error);
        return false;
    }
}

// Detects a single face and returns its descriptor as a simple array.
async function enrollFace() {
    const video = getVideoElement();
    if (!video) {
        console.error("Enrollment failed: Video element not found!");
        return null;
    }
    console.log("Detecting face for enrollment...");
    const detection = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptor();
    if (detection) {
        console.log("Face found. Returning descriptor as a plain array.");
        return Array.from(detection.descriptor);
    } else {
        console.log("No face was detected during enrollment attempt.");
        return null;
    }
}

// Takes a list of enrolled faces (with names and descriptors) and creates a FaceMatcher.
function prepareDescriptors(enrolledFaces) {
    if (!enrolledFaces || !Array.isArray(enrolledFaces) || enrolledFaces.length === 0) {
        console.error("Failed to prepare descriptors: input was null, not an array, or empty.");
        faceMatcher = null; // Ensure matcher is cleared if there's no data
        return;
    }

    try {
        const labeledFaceDescriptors = enrolledFaces.map(face => {
            // Ensure face.face_data is a flat array of numbers before creating Float32Array
            if (!face.face_data || !Array.isArray(face.face_data)) {
                 console.error("Invalid face_data for user:", face.name);
                 return null;
            }
            const descriptor = new Float32Array(face.face_data);
            return new faceapi.LabeledFaceDescriptors(face.name, [descriptor]);
        }).filter(ld => ld !== null); // Filter out any nulls from invalid data

        if (labeledFaceDescriptors.length === 0) {
            console.error("No valid labeled descriptors could be created.");
            faceMatcher = null;
            return;
        }

        faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);
        console.log("FaceMatcher prepared with all enrolled faces.");
    } catch (error) {
        console.error("Error preparing descriptors:", error);
    }
}

// Clears the FaceMatcher when data is refreshed.
function clearDescriptors() {
    faceMatcher = null;
    console.log("FaceMatcher cleared.");
}

// Verifies a face against the global FaceMatcher.
async function verifyFace() {
    const video = getVideoElement();
    if (!video) {
        console.error("Verification failed: Video element not found!");
        return { match: false, name: "Error: Video not found" };
    }
    if (!faceMatcher) {
        console.error("Verification failed: No descriptors have been prepared.");
        return { match: false, name: "Error: Descriptors not ready" };
    }

    console.log("Verifying face against prepared descriptors...");
    const detection = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptor();

    if (detection) {
        const bestMatch = faceMatcher.findBestMatch(detection.descriptor);
        console.log(`Verification match result: ${bestMatch.toString()}`);
        return {
            match: bestMatch.label !== 'unknown',
            name: bestMatch.label
        };
    } else {
        console.log("No face was detected during verification attempt.");
        return { match: false, name: "No face detected" };
    }
}