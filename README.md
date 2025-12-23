NexEra AI Engineering Challenge — Multimodal Prototypes

This repository contains two interactive AI-powered prototypes built as part of the NexEra AI Engineering Challenge. The goal was to design and demonstrate scalable AI-driven systems for human-focused learning and training scenarios.

The emphasis of this challenge is not production polish, but architecture, reasoning, and integration of multimodal AI into interactive experiences.

🔹 Prototype 1 — AI-Generated 3D Learning Asset Pipeline (Mocked)
Overview

This prototype demonstrates the AI reasoning and content-generation layer of a text-to-3D educational pipeline.

Users enter a textual description of an object (e.g. “yellow hard hat”). The system simulates AI analysis to classify the object, generate structured educational content, and prepare a corresponding 3D asset for learner interaction.

How It Works

User submits a text description

Backend API simulates AI reasoning (mocked for reliability)

The AI returns structured educational data:

Object classification

Usage explanation

Training guidance

The frontend displays:

Educational content

A placeholder 3D asset preview

A simulated “3D model ready” state

Why the AI Is Mocked

For demo reliability and cost control, the AI inference layer is mocked. However, the system architecture mirrors a real production flow, where:

AI models would generate or retrieve suitable 3D assets

Assets would be standardized (GLB conversion, scaling, materials)

Content would be rendered in an interactive 3D viewer (e.g. Babylon.js or Unity WebGL)

This approach ensures the pipeline is easily extensible to real AI and real-time 3D rendering.

Live Demo

👉 https://nexera-ai-challenge.vercel.app

🔹 Prototype 2 — Natural Language → Avatar Behaviour Mapping
Overview

This prototype demonstrates how natural language commands can be interpreted and mapped to avatar behaviours for human training and learning scenarios.

It simulates the foundation of NexEra’s AI learning coach, trainer, or scenario-based avatars.

How It Works

User types a natural language command (e.g. “Wave hello to the learner”)

The system interprets the command using a mock AI reasoning layer

The interpreted intent is mapped to an avatar action

The avatar’s state updates and an AI explanation is displayed

Example Commands

“Wave hello to the learner”

“Walk to the table”

“Point at the fire extinguisher”

“Show the correct safety posture”

Design Rationale

Instead of focusing on animation realism, this prototype emphasizes:

Command → intent → behaviour mapping

Clear AI explanations for learner understanding

A scalable structure that can later integrate real animation systems such as Mixamo, DeepMotion, or Unity animation controllers

Live Demo

👉 https://nexera-ai-challenge.vercel.app/avatar.html

🧠 Architecture Summary

Frontend: HTML, JavaScript

Backend: Serverless API (Vercel)

AI Layer: Mocked (swappable with live models)

Hosting: Vercel

Version Control: GitHub

Both prototypes are intentionally kept within a single codebase to reflect how features would be developed and iterated inside a unified platform.

🚧 Limitations & Next Steps
Current Limitations

AI inference is mocked

3D assets are represented as placeholders

Avatar animations are simulated via state changes

Planned Extensions

Integrate real text-to-3D or retrieval-based asset pipelines

Load standardized GLB models into a 3D viewer

Replace mock avatar states with real animation playback

Add learner assessment and feedback mechanisms

🎯 Final Notes

These prototypes focus on engineering reasoning, system design, and multimodal integration, which reflect the real-world problems NexEra is solving in AI-powered human learning environments.
