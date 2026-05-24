---
title: "Bootstrapping Local LLMs on SFF Hardware"
description: "How to run Llama 3 8B locally on an N100 Mini PC without melting your motherboard."
pubDate: "2026-05-23"
---

Welcome to the first transmission. 

In this log, we will initialize a completely offline, local LLM orchestration node using a cheap SFF (Small Form Factor) mini PC. 

## The Objective

Relying on cloud APIs is a vulnerability. True eminence requires local execution. We will configure `Ollama` to serve models from the edge.

### Step 1: System Prep

Install the binaries via the terminal. Avoid GUIs.

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Step 2: Model Acquisition

Pull the model. Wait for the download. 

```bash
ollama run llama3
```

You now have a functional, local reasoning engine.
