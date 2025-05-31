---
id: order-create
title: Create Order API
sidebar_position: 1
---

# Create Order API

Create a new order for a customer in the e-commerce system.

## Endpoint

`POST /api/orders`

## Request Headers

| Header           | Type   | Description                     |
|------------------|--------|---------------------------------|
| Authorization    | string | Bearer token for authentication |

## Request Body

```json
{
  "customerId": "12345",
  "shippingAddress": {
    "line1": "123 Main St",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94105",
    "country": "USA"
  },
  "items": [
    {
      "productId": "98765",
      "quantity": 2,
      "price": 29.99
    },
    {
      "productId": "54321",
      "quantity": 1,
      "price": 99.99
    }
  ],
  "paymentMethod": {
    "type": "credit_card",
    "cardNumber": "**** **** **** 1234",
    "expiry": "12/26"
  }
}
```

## Response

```json
{
  "orderId": "order_abc123",
  "status": "pending",
  "createdAt": "2025-05-31T12:34:56Z",
  "totalAmount": 159.97,
  "items": [
    {
      "productId": "98765",
      "quantity": 2,
      "price": 29.99
    },
    {
      "productId": "54321",
      "quantity": 1,
      "price": 99.99
    }
  ],
  "shippingAddress": {
    "line1": "123 Main St",
    "line2": "Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94105",
    "country": "USA"
  }
}
```

## Example cURL

```bash
curl -X POST https://api.yoursite.com/api/orders \
  -H "Authorization: Bearer your_token_here" \
  -H "Content-Type: application/json" \
  -d '{
    "customerId": "12345",
    "shippingAddress": {
      "line1": "123 Main St",
      "line2": "Apt 4B",
      "city": "San Francisco",
      "state": "CA",
      "zip": "94105",
      "country": "USA"
    },
    "items": [
      {"productId": "98765", "quantity": 2, "price": 29.99},
      {"productId": "54321", "quantity": 1, "price": 99.99}
    ],
    "paymentMethod": {
      "type": "credit_card",
      "cardNumber": "**** **** **** 1234",
      "expiry": "12/26"
    }
  }'
```
## Example GraphqlQuery
```graphql
mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    orderId
    status
    createdAt
    totalAmount
    items {
      productId
      quantity
      price
    }
    shippingAddress {
      line1
      line2
      city
      state
      zip
      country
    }
  }
}
```

## Variables
```json
{
  "input": {
    "customerId": "12345",
    "shippingAddress": {
      "line1": "123 Main St",
      "line2": "Apt 4B",
      "city": "San Francisco",
      "state": "CA",
      "zip": "94105",
      "country": "USA"
    },
    "items": [
      {"productId": "98765", "quantity": 2, "price": 29.99},
      {"productId": "54321", "quantity": 1, "price": 99.99}
    ],
    "paymentMethod": {
      "type": "credit_card",
      "cardNumber": "**** **** **** 1234",
      "expiry": "12/26"
    }
  }
}
```

