---
title: "VulnBox - Local File Inclusion (LFI) Walkthrough"
date: "2024-10-18"
slug: "vulnbox-lfi"
coverImage: "/MalwareLab-X.jpg"
tags: ["LFI", "Penetration Testing", "CTF"]
readingTime: "6 min"
---

## Overview

In this walkthrough, we exploited a Local File Inclusion vulnerability to read sensitive files on the server.

## Recon

The target was scanned with `nmap` revealing port 8080 open:

```bash
nmap -sC -sV -p 8080 -oA vulnbox-lfi 10.10.10.10
