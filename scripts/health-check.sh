#!/bin/bash

# Health check script for localhost:5173
echo "🔍 Checking if server is running on localhost:5173..."

# Counter for timeout
counter=0
max_attempts=30

while [ $counter -lt $max_attempts ]; do
    if curl -s -f http://localhost:5173 > /dev/null 2>&1; then
        echo "✅ Server is running successfully on http://localhost:5173"
        echo "🌐 You can view your portfolio at: http://localhost:5173"
        exit 0
    else
        echo "⏳ Waiting for server... (attempt $((counter + 1))/$max_attempts)"
        sleep 1
        counter=$((counter + 1))
    fi
done

echo "❌ Server failed to start after $max_attempts seconds"
echo "💡 Try running: npm run dev"
exit 1
