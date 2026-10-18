# Clarissa Engineering Log and Portfolio

A responsive, production-ready developer portfolio and technical engineering log built using modern frontend architecture. This project serves as a centralized hub to showcase software engineering projects, technical skills, and continuous learning documentation as a Computer Engineering Senior at The University of Alabama in Huntsville (UAH).

This application was developed and deployed in collaboration with the Handshake AI Skills Studio Mission and Vercel.

## Live Demo

- **Production URL:** [https://vercel.app](https://vercel.app)
- **LinkedIn Profile:** [https://linkedin.com](https://linkedin.com)

## Core Architecture and Features

### 1. Project Showcase
An organized, badge-based grid displaying active software repositories, core features, and architectural accomplishments, including:
- **DevDucky:** A VS Code Marketplace extension for tracking active coding durations.
- **NASA Space Data Deployment Engine:** An automated Python workflow utilizing GitHub Actions and Linux Cloud Runners to execute daily cron jobs for high-resolution space payloads.
- **Livestock Management Database Engine:** A file-based C++ CRUD system utilizing custom Makefile cross-platform overrides to resolve Windows and Linux text formatting conflicts.

### 2. Clarissa Engineering Log
A dedicated content section designed for ongoing technical documentation, markdown-formatted log entries, system architecture breakdowns, and software troubleshooting records.

### 3. Design System
Styled completely with Tailwind CSS, featuring toggleable Light and Dark modes built around the custom LUNA color palette:
- **Dark Mode Background:** Deep Obsidian Code (`#25263B`)
- **Primary Bright Accent:** Soft Lavender Highlight (`#D3BFDF`)
- **Secondary Muted Accent:** Muted Amethyst (`#B3A7C2`)
- **Light Mode Background:** Off-White Canvas (`#FBF3FC`)

## Technology Stack

- **Framework:** Next.js / React
- **Styling:** Tailwind CSS (Responsive Utilities and Theme Configuration)
- **Deployment Platform:** Vercel Production Environment
- **Development Tooling:** Vercel v0 Generative Design Interface

## Deployment and Infrastructure

This repository is configured for Continuous Integration and Continuous Deployment (CI/CD) via Vercel. Every commit pushed to the main branch triggers an automated build pipeline that compiles the application, runs optimizations, and serves the static assets over a global Edge Network.

### Continuous Maintenance
Unlike standard classroom assignments, this codebase is structured to be persistent. The Engineering Log section is decoupled from the layout, allowing for seamless content updates directly within the repository files without destabilizing the core layout architecture.
