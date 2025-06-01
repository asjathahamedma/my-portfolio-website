---
title: "VulnBox - SQL Injection Walkthrough"
date: "2024-10-15"
slug: "vulnbox-injection"
coverImage: "/MalwareLab-X.jpg"
tags: ["SQLi", "Penetration Testing", "CTF"]
readingTime: "5 min"
---

## Overview

In this walkthrough, we exploited a vulnerable login form using SQL Injection.

## Recon

We scanned the target with `nmap` and found port 80 open:

```bash
nmap -sC -sV -oA vulnbox 10.10.10.10
