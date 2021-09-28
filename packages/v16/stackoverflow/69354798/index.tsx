import React, { useCallback, useState } from 'react'

export default function MyComponent() {
  const [recordTargetStream, setRecordTargetStream] = useState<MediaStream>()

  const requestPermissions = useCallback(async() => {
    const stream = await window.navigator.mediaDevices.getUserMedia({audio: true, video: true})
    setRecordTargetStream(stream)
  }, [])

  const startRecording = useCallback(() => {
    console.log('start recording', recordTargetStream)
  }, [recordTargetStream])

  return (
   <>
    <button onClick={() => requestPermissions()}>Request permissions</button>
    <button onClick={() => startRecording()}>Start recording</button>
   </>
  )
}
