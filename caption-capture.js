// Create an array to store all captions
let allCaptions = [];
let lastCaptionText = "";
let captionObserver;

// Function to start collecting captions
function startCaptionCollection() {
  const captionsContainer = document.querySelector('.vjs-text-track-display');
  
  if (!captionsContainer) {
    console.error("Caption container not found!");
    return;
  }
  
  // Set up the observer to watch for changes in the captions
  captionObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      // Get the current caption text
      const currentText = captionsContainer.textContent.trim();
      
      // Only add to our collection if it's new text
      if (currentText && currentText !== lastCaptionText) {
        // Add timestamp if needed
        const currentTime = Math.floor(document.querySelector('video').currentTime);
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;
        const timestamp = `[${minutes}:${seconds.toString().padStart(2, '0')}] `;
        
        // Store the caption
        allCaptions.push(timestamp + currentText);
        lastCaptionText = currentText;
      }
    }
  });
  
  // Start observing the caption container for changes
  captionObserver.observe(captionsContainer, { 
    childList: true,
    subtree: true,
    characterData: true
  });
  
  console.log("Caption collection started! Let the video play to capture all captions.");
}

// Function to stop collecting and display results
function stopCaptionCollection() {
  if (captionObserver) {
    captionObserver.disconnect();
    console.log("Caption collection stopped.");
    
    // Display and return the full caption text
    const fullCaptionText = allCaptions.join('\n');
    console.log("=== FULL CAPTION TEXT ===");
    console.log(fullCaptionText);
    
    // Create a downloadable file
    const blob = new Blob([fullCaptionText], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'video_captions.txt';
    downloadLink.textContent = 'Download Captions';
    downloadLink.style.display = 'block';
    downloadLink.style.margin = '10px 0';
    
    // Add to page
    document.body.appendChild(downloadLink);
    console.log("Download link created at the bottom of the page.");
    
    return fullCaptionText;
  } else {
    console.error("Caption collection was not started!");
  }
}

// Help text
console.log("To start collecting captions, call: startCaptionCollection()");
console.log("To stop and get results, call: stopCaptionCollection()");
