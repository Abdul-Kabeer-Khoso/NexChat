# Firebase Chat App

## Overview

This is a modern **real-time chat web application** built using **React.js, Firebase, and Tailwind CSS**. The app provides unique voice-based and interactive chat features, making it **fun, emotional, and secure**. Unlike traditional chat apps, it includes advanced features like voice-emotion filters, secret voice layers, and message time capsules.

## Features

1. **Voice-Emotion Filters**
   - Apply real-time emotion-based filters to voice messages (happy, sad, excited, etc.)

2. **Voice-to-Visual Notes**
   - Visual waveforms and key phrase highlights generated from voice messages for quick scanning.

3. **Context-Based Reactions**
   - Suggest smart reactions based on message content and voice emotion (stickers, emojis, or voice reactions).

4. **Secret Voice Layers**
   - Hidden sub-layers of voice messages that can be revealed by the recipient.

5. **Whisper Mode**
   - Send and play voice messages quietly, audible only on headphones.

6. **Message Time Capsules**
   - Messages can be locked and scheduled to unlock at a future date/time.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend / Realtime:** Firebase (Auth, Firestore, Storage)
- **Voice Processing:** Web Audio API (for filters, waveform generation)
- **Realtime Updates:** Firestore `onSnapshot()` for live messaging

## Firebase Services Used

- **Firebase Auth**: User authentication
- **Firestore**: Store messages, reactions, hidden layers, unlock times
- **Storage**: Store voice files (normal, whisper, secret layers)
- **Realtime Updates**: Ensure live messaging experience

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Abdul-Kabeer-Khoso/NexChat.git
```

2. Install dependencies:

```bash
cd your-project-folder
npm install
```

3. Configure Firebase:
   - Create a Firebase project
   - Enable **Auth (Email/Phone)**
   - Create **Firestore** and **Storage buckets**
   - Replace Firebase config in `src/firebase/config.js`

4. Start the development server:

```bash
npm start
```

## Usage

- Login using Google or Email/Phone
- Send text or voice messages
- Interact with unique features like:
  - Voice-emotion filters
  - Voice-to-visual notes
  - Context-based reactions
  - Secret voice layers
  - Whisper mode
  - Message time capsules
