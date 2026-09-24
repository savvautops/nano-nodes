---
title: "Sunshine & Moonlight: Your Personal Zero-Latency Gaming Cloud"
description: "Turn your home PC into a private gaming cloud and play anywhere with Sunshine, Moonlight, and Tailscale."
pubDate: 2026-05-23
category: "Builds"
heroImage: "/blog-placeholder-about.jpg"
tags: ["Gaming", "Sunshine", "Moonlight", "Tailscale", "Cloud Gaming"]
---

# Sunshine & Moonlight: Your Personal Zero-Latency Gaming Cloud

The era of paying monthly fees for "Cloud Gaming" is over. Why rent a server in a data center when you already have a powerful GPU sitting in your living room? In this transmission, we’re going to show you how to build your own private gaming cloud using **Sunshine** and **Moonlight**.

## [THE_CONCEPT]

Paid services like GeForce Now or Xbox Cloud Gaming are great for convenience, but they come with a "latency tax" and a monthly bill. By using Sunshine (the server) and Moonlight (the client), you can stream your own library from your PC to almost any device (tablets, phones, or even older laptops) with near-zero lag.

## [HOW_IT_WORKS]

To understand why this is faster than Discord or Steam Link, we need to look at the three stages of the "Zero-Latency Pipe":

### 1. The Capture (Host Side)
Sunshine doesn't just "record" your screen. It hooks directly into your GPU's hardware encoders (**NVENC** for Nvidia, **QuickSync** for Intel, or **AMF** for AMD). It grabs the frames before they even hit your monitor and squashes them into a high-bitrate video stream in microseconds.

### 2. The Transmission (The Pipe)
Using the RTSP protocol over UDP, Sunshine blasts those frames across your network. Unlike TCP (which waits for confirmation), UDP just sends. If a packet is lost, it moves to the next one, ensuring the video never "buffers" or falls behind.

### 3. The Input (Feedback Loop)
Moonlight takes your controller or touch inputs and sends them back to Sunshine. Because this happens on a dedicated low-latency channel, it feels like the game is running locally on your tablet.

## [DEPLOYMENT_SEQUENCE]

### Phase 1: The Host (Sunshine)
1. Download and install [Sunshine](https://github.com/LizardByte/Sunshine/releases).
2. Open the Web UI at `https://localhost:47990`.
3. Set up your username/password and ensure your GPU encoder is detected in the "Audio/Video" tab.

### Phase 2: The Client (Moonlight)
1. Install [Moonlight](https://moonlight-stream.org/) on your tablet or remote device.
2. Ensure you are on the same network. Your PC should appear automatically.
3. Click your PC and enter the PIN shown on your tablet into the Sunshine Web UI "Configuration" tab.

### Phase 3: Gaming Anywhere (Tailscale)
To make this work outside your house without opening dangerous ports on your router:
1. Install [Tailscale](https://tailscale.com) on both your PC and your tablet.
2. Log in to the same account.
3. Your tablet can now "see" your PC via its Tailscale IP address from anywhere in the world.

## [HARDWARE_ACQUISITION]

For the best experience, we recommend a tablet with a high-quality screen and a dedicated controller.

<p style="margin:1.5rem 0"><a href="https://www.amazon.com/s?k=Samsung+Galaxy+Tab+S6+Lite" target="_blank" rel="noopener" style="display:inline-block;border:2px solid currentColor;padding:.75rem 1.5rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;text-decoration:none">Check the Tab S6 Lite on Amazon</a></p>

<table>
<thead><tr><th>Part</th><th>Price</th></tr></thead>
<tbody>
<tr><td><a href="https://www.amazon.com/s?k=Samsung+Galaxy+Tab+S6+Lite" target="_blank" rel="noopener">Samsung Galaxy Tab S6 Lite</a></td><td>$199.00</td></tr>
<tr><td><a href="https://www.amazon.com/s?k=8BitDo+Pro+2+controller" target="_blank" rel="noopener">8BitDo Pro 2 Controller</a></td><td>$49.99</td></tr>
</tbody>
</table>

<ul>
<li><a href="https://github.com/LizardByte/Sunshine" target="_blank" rel="noopener">Sunshine</a>, the self-hosted game stream host.</li>
<li><a href="https://moonlight-stream.org/" target="_blank" rel="noopener">Moonlight</a>, open-source GameStream client for all platforms.</li>
<li><a href="https://tailscale.com" target="_blank" rel="noopener">Tailscale</a>, zero-config mesh VPN for secure remote gaming.</li>
</ul>
