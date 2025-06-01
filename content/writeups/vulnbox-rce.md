---
title: "VulnBox - Remote Code Execution (RCE) Walkthrough"
date: "2024-10-19"
slug: "vulnbox-rce"
coverImage: "/MalwareLab-X.jpg"
tags: ["RCE", "Penetration Testing", "CTF"]
readingTime: "8 min"
---

# Overview

This walkthrough demonstrates how to exploit a Remote Code Execution vulnerability on a web application.

## Recon

We started by scanning the target with `nmap` and found port 443 open, running HTTPS:

```bash
nmap -sC -sV -p 443 -oA vulnbox-rce 10.10.10.10
```

Scan Results:

- Port 80: HTTP service running on Apache
- No authentication on the web interface
- Potential user input via a diagnostic utility


# 💣 Exploitation
