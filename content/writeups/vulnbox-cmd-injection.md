---
title: "VulnBox - Command Injection Walkthrough"
date: "2024-10-17"
slug: "vulnbox-cmd-injection"
coverImage: "/MalwareLab-X.jpg"
tags: ["Command Injection", "Penetration Testing", "CTF"]
readingTime: "7 min"
---

## Overview

This walkthrough covers exploiting a command injection vulnerability in the ping utility on the web interface.

## Recon

An `nmap` scan revealed port 80 hosting the vulnerable web service:

```bash
nmap -sC -sV -oA vulnbox-cmd 10.10.10.10
