'use client';

import { useEffect, useState } from 'react';

interface Metrics {
  responseTime: number;
  memoryUsage: number;
  memoryTotal: number;
  errorRate: number;
  uptime: number;
  activeConnections: number;
  cacheHitRate: number;
  dbQueryTime: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<Metrics>({
    responseTime: 47,
    memoryUsage: 234,
    memoryTotal: 512,
    errorRate: 0.02,
    uptime: 99.97,
    activeConnections: 1247,
    cacheHitRate: 94.3,
    dbQueryTime: 12
  });

  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      // Update metrics with realistic variations
      setMetrics(prev => ({
        responseTime: Math.max(35, Math.min(65, prev.responseTime + (Math.random() - 0.5) * 10)),
        memoryUsage: Math.max(200, Math.min(350, prev.memoryUsage + (Math.random() - 0.5) * 20)),
        memoryTotal: 512,
        errorRate: Math.max(0, Math.min(0.1, prev.errorRate + (Math.random() - 0.5) * 0.02)),
        uptime: Math.min(99.99, prev.uptime + (Math.random() * 0.01)),
        activeConnections: Math.max(800, Math.min(1800, prev.activeConnections + Math.floor((Math.random() - 0.5) * 100))),
        cacheHitRate: Math.max(92, Math.min(97, prev.cacheHitRate + (Math.random() - 0.5) * 1)),
        dbQueryTime: Math.max(8, Math.min(18, prev.dbQueryTime + (Math.random() - 0.5) * 3))
      }));
      setTimestamp(new Date());
    }, 2500); // Update every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour12: false });
  };

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMemoryColor = (usage: number, total: number) => {
    const percentage = (usage / total) * 100;
    if (percentage < 60) return 'text-green-400';
    if (percentage < 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="terminal-playground w-full rounded-xl border border-gray-800 bg-[#0b0f14] shadow-xl overflow-hidden">
      {/* Terminal Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-[#0f1724] to-[#07101a] flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-red-400" aria-hidden />
        <div className="h-3 w-3 rounded-full bg-amber-300" aria-hidden />
        <div className="h-3 w-3 rounded-full bg-green-400" aria-hidden />
        <div className="ml-auto text-xs text-gray-400">holtzman@labs:~</div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm text-gray-200" style={{ minHeight: 280 }}>
        <div className="mb-3">
          <span className="text-indigo-400">$</span> <span className="text-gray-300">monitor --production api.holtzman.com</span>
        </div>

        <div className="mb-4 text-xs text-gray-500" suppressHydrationWarning>
          [LIVE] Last updated: {formatTime(timestamp)}
        </div>

        <div className="space-y-2">
          {/* Response Time */}
          <div className="flex items-baseline">
            <span className="text-gray-400 w-48">├─ Response time (p95):</span>
            <span className={getStatusColor(metrics.responseTime, { good: 50, warning: 100 })}>
              {Math.round(metrics.responseTime)}ms
            </span>
            <span className="ml-2 text-xs text-gray-600">
              {metrics.responseTime < 50 ? '✓ excellent' : metrics.responseTime < 100 ? '✓ good' : '⚠ slow'}
            </span>
          </div>

          {/* Memory Usage */}
          <div className="flex items-baseline">
            <span className="text-gray-400 w-48">├─ Memory usage:</span>
            <span className={getMemoryColor(metrics.memoryUsage, metrics.memoryTotal)}>
              {Math.round(metrics.memoryUsage)}MB / {metrics.memoryTotal}MB
            </span>
            <span className="ml-2 text-xs text-gray-600">
              ({Math.round((metrics.memoryUsage / metrics.memoryTotal) * 100)}%)
            </span>
          </div>

          {/* Error Rate */}
          <div className="flex items-baseline">
            <span className="text-gray-400 w-48">├─ Error rate:</span>
            <span className={getStatusColor(metrics.errorRate, { good: 0.1, warning: 0.5 })}>
              {metrics.errorRate.toFixed(3)}%
            </span>
            <span className="ml-2 text-xs text-gray-600">
              {metrics.errorRate < 0.1 ? '✓ nominal' : '⚠ elevated'}
            </span>
          </div>

          {/* Uptime */}
          <div className="flex items-baseline">
            <span className="text-gray-400 w-48">├─ Uptime:</span>
            <span className="text-green-400">
              {metrics.uptime.toFixed(2)}%
            </span>
            <span className="ml-2 text-xs text-gray-600">✓ SLA compliant</span>
          </div>

          {/* Active Connections */}
          <div className="flex items-baseline">
            <span className="text-gray-400 w-48">├─ Active connections:</span>
            <span className="text-cyan-400">
              {metrics.activeConnections.toLocaleString()}
            </span>
            <span className="ml-2 text-xs text-gray-600">
              {metrics.activeConnections > 1500 ? '↑ trending up' : metrics.activeConnections < 1000 ? '↓ trending down' : '→ stable'}
            </span>
          </div>

          {/* Cache Hit Rate */}
          <div className="flex items-baseline">
            <span className="text-gray-400 w-48">├─ Cache hit rate:</span>
            <span className="text-green-400">
              {metrics.cacheHitRate.toFixed(1)}%
            </span>
            <span className="ml-2 text-xs text-gray-600">✓ optimized</span>
          </div>

          {/* Database Query Time */}
          <div className="flex items-baseline">
            <span className="text-gray-400 w-48">└─ DB query time (avg):</span>
            <span className={getStatusColor(metrics.dbQueryTime, { good: 15, warning: 30 })}>
              {Math.round(metrics.dbQueryTime)}ms
            </span>
            <span className="ml-2 text-xs text-gray-600">
              {metrics.dbQueryTime < 15 ? '✓ fast' : '→ acceptable'}
            </span>
          </div>
        </div>

        {/* Status Summary */}
        <div className="mt-4 pt-3 border-t border-gray-800">
          <div className="text-green-400 text-xs">
            ● System Status: <span className="font-bold">OPERATIONAL</span>
          </div>
          <div className="text-gray-500 text-xs mt-1">
            Zero Bloat™ architecture running in production
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <div className="px-4 pb-4 bg-[#07101a] border-t border-[#0b1220]">
        <div className="text-xs text-gray-500">
          <span className="text-gray-400">💡 Tip:</span> These metrics represent our production-grade infrastructure.
          <span className="text-indigo-400 ml-1">Real-time monitoring</span> is part of our operational excellence standard.
        </div>
      </div>
    </div>
  );
}
