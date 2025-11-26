#!/bin/bash

# Create a backup directory first (optional but recommended)
mkdir -p backups
cp *.mp4 backups/

# Process each MP4 file
for file in *.mp4; do
    # Skip if not a regular file
    [ -f "$file" ] || continue
    
    # Create temporary output filename
    temp_file="temp_${file}"
    
    echo "Processing $file..."
    
    # Run ffmpeg with your parameters to temporary file
    ffmpeg -y -i "$file" -vcodec libx264 -pix_fmt yuv420p -profile:v baseline -level 3.0 -crf 22 -preset veryfast -movflags +faststart "$temp_file"
    
    # Check if ffmpeg was successful
    if [ $? -eq 0 ]; then
        # Replace original file with processed file
        mv -f "$temp_file" "$file"
        echo "Successfully processed $file"
    else
        echo "Error processing $file, keeping original"
        rm -f "$temp_file"
    fi
done

echo "All files processed!"
