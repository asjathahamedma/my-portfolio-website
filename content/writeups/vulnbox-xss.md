---
title: "VulnBox - Cross-Site Scripting (XSS) Walkthrough"
date: "2024-10-16"
slug: "vulnbox-xss"
coverImage: "/MalwareLab-X.jpg"
tags: ["XSS", "Penetration Testing", "CTF"]
readingTime: "6 min"
---

## Overview

This walkthrough demonstrates exploiting a reflected XSS vulnerability in the search input.

## Recon

Using `nmap`, we identified an HTTP server running on port 8080:

```bash
nmap -sC -sV -p 8080 -oA vulnbox-xss 10.10.10.10
