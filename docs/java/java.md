# Java 技术笔记 💻
## Java 多线程
```java
// 线程池标准模板
ThreadPoolExecutor pool = new ThreadPoolExecutor(
    5, 10, 60L, TimeUnit.SECONDS, new ArrayBlockingQueue<>(100)
);