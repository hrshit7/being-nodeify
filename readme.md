# Learning Nodejs

- History
- Built & conversion
- Nodejs Installation
    - Node REPL
    - Global Object
    - GobalThis
- Modules
- Behind Nodejs
    - IIFE
    - Behind require function
    - Nodejs Github
- libuv async i/o
    - sync / async
    - libuv
    - working of async i/o or non-blocking thread
- Practical 
    - sync 
    - async
    - blocking
    - setTimeout (cbfn,0);
- Deep Dive into libuv
    - event loop 
        - phases
            - timer
            - poll
            - check
            - close
        - priority phases after every upper phase
            - process.nextTick
            - promise callback
    - thread pool
    - callback queue 
        - There are different queue for different phases   
- server 
    - client server Architecture
    - sockets
    - protocols 
    - socket vs websocket
    - DNS
- Databases
   - DBMS
   - RDBMS
   - SQL vs NOSQL
- Creating MongoDB Databases