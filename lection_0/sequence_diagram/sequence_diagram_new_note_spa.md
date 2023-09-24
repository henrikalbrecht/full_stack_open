```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: HTTP POST request
    activate server
    server->>browser: HTTP Status Code 201
    deactivate server
```