# Fullstack Test Triv

A responsive React + TypeScript single-page application built with Vite for a Triv technical test.

The project contains two main sections:

- **Supermarket** — a simple product listing with cart functionality.
- **Trading Fest** — a responsive landing page for Triv Trading Competition.

## Live Demo

https://fullstack-test-triv.vercel.app

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Recoil
- Lucide React
- Vercel

## Features

### Supermarket

- Display product list
- Add products to cart
- Increase quantity when adding the same product
- Remove product from cart
- Clear all cart items
- Calculate total cart price
- Persist cart data in `localStorage`

### Trading Fest Landing Page

- Responsive landing page
- Hero section
- Rewards section
- Leaderboard section
- Registration call-to-action
- FAQ accordion
- Optimized image assets using WebP

### Routing

| Path | Page |
|---|---|
| `/` | Supermarket page |
| `/cart` | Cart page |
| `/tradingfest` | Trading Fest landing page |
| `*` | Not found page |
