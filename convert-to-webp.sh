#!/bin/bash

# images 디렉토리의 모든 PNG 파일을 webp로 변환
cd "$(dirname "$0")/images"

for file in *.png; do
    if [ -f "$file" ]; then
        output="${file%.png}.webp"
        echo "Converting $file to $output..."
        cwebp -q 90 "$file" -o "$output"
        if [ $? -eq 0 ]; then
            echo "✓ Successfully converted $file to $output"
        else
            echo "✗ Failed to convert $file"
        fi
    fi
done

echo "Conversion complete!"
