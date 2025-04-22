# Broken Access Control Lab

This lab demonstrates a **Broken Access Control** vulnerability in a Node.js application, simulating a Web3 API that exposes user data without proper authentication. The endpoint `/users/:id` allows anyone to access sensitive user information, such as wallet addresses and balances, by changing the `id` parameter. 😱

## Prerequisites
- Node.js (v14 or higher)
- npm

## Setup Instructions
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/web3-security-labs.git
   cd web3-security-labs/broken-access-control
