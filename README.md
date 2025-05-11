# Video Caption Extractor for Safari

A JavaScript tool that captures closed captions from videos played in Safari's browser and saves them as text files.

## Overview

This tool helps you extract closed caption text from videos playing in Safari by monitoring the caption display element and recording all caption text that appears during playback. It's especially useful for:

- Creating transcripts of videos
- Saving important information from educational content
- Making videos more accessible
- Research and note-taking

## Features

- Captures all captions throughout video playback
- Adds timestamps to each caption
- Automatically removes duplicate captions
- Creates a downloadable text file of the complete transcript
- Works with videos using the `vjs-text-track-display` caption container

## Requirements

- Safari browser
- Developer tools enabled in Safari
- A video with closed captions enabled

## Setup Instructions

1. **Enable Safari Developer Tools:**
   - Open Safari
   - Go to Safari > Settings > Advanced
   - Check "Show Develop menu in menu bar"

2. **Open the video with captions:**
   - Navigate to the webpage containing your video
   - Start playing the video
   - Enable captions/subtitles in the video player

3. **Access Developer Tools:**
   - Right-click on the video and select "Inspect Element" or press Command+Option+I
   - Click on the "Console" tab in the developer tools panel

## Usage Instructions

1. **Copy the script:**
   - Copy the entire JavaScript code provided below

2. **Paste into Safari Console:**
   - Paste the code into the Safari console
   - Press Enter to load the functions

3. **Start collection:**
   - Type `startCaptionCollection()` in the console and press Enter
   - You should see the message "Caption collection started!"

4. **Play the video:**
   - Let the video play through all the parts where you want to capture captions
   - The script will automatically collect captions as they appear

5. **Stop and save:**
   - When finished, type `stopCaptionCollection()` in the console
   - A "Download Captions" link will appear at the bottom of the webpage
   - Click this link to save the complete caption text as a file

## How It Works

1. The script finds the caption container element in the video player's DOM
2. It sets up a MutationObserver to monitor changes to this container
3. When new caption text appears, it records the text along with a timestamp
4. When collection is stopped, it compiles all captions into a single text document
5. The script creates a download link for saving the captions as a text file

## Troubleshooting

- **"Caption container not found" error:**
  - Make sure captions are enabled in the video player
  - The script looks for `.vjs-text-track-display` class; your video may use a different class name
  - Try inspecting the video player to find the correct caption container element

- **No captions being collected:**
  - Ensure the video is actually playing
  - Verify that captions are visible on screen
  - Try refreshing the page and starting over

- **Missing captions:**
  - Play the video at a slower speed to ensure all captions are detected
  - Some very brief captions might be missed if they display for less than a second

## Customization

You can modify these parts of the script for your needs:

- Change the caption container selector if your video uses a different class
- Adjust the timestamp format
- Modify how captions are formatted in the output file

## Limitations

- Works only with videos that use the `.vjs-text-track-display` class (common in Video.js players)
- Requires Safari's Developer Tools
- May not capture captions from all video platforms or players
- Only works with visible captions (not with hidden caption data)
