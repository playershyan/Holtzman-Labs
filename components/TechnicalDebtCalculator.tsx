'use client';

import { useState } from 'react';
import { useDebtCalculation } from '@/hooks/useDebtCalculation';
import { useAnimatedNumber } from '@/hooks/useAnimatedNumber';
import type { CalculatorInputs } from '@/hooks/useDebtCalculation';

export default function TechnicalDebtCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    teamSize: 3,
    projectAge: 12,
    shortcuts: 50,
    testCoverage: 60,
    codeReview: 'sometimes',
    deployment: 'weekly'
  });

  const results = useDebtCalculation(inputs);

  // Animate the main numbers
  const animatedTotalCost = useAnimatedNumber(results.totalCost);
  const animatedHoltzmanCost = useAnimatedNumber(results.holtzmanCost);
  const animatedSavings = useAnimatedNumber(results.savings);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 shadow-sm">
      <h3 className="text-2xl font-bold text-black mb-2">
        Technical Debt Calculator
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        See what bad code really costs you
      </p>

      {/* Input Section */}
      <div className="space-y-6 mb-8">
        {/* Team Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Size: <span className="text-black font-bold">{inputs.teamSize}</span> developers
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setInputs(prev => ({ ...prev, teamSize: Math.max(1, prev.teamSize - 1) }))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-semibold transition-colors"
              aria-label="Decrease team size"
            >
              −
            </button>
            <input
              type="range"
              min="1"
              max="20"
              value={inputs.teamSize}
              onChange={(e) => setInputs(prev => ({ ...prev, teamSize: Number(e.target.value) }))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
              aria-label="Team size slider"
            />
            <button
              onClick={() => setInputs(prev => ({ ...prev, teamSize: Math.min(20, prev.teamSize + 1) }))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-semibold transition-colors"
              aria-label="Increase team size"
            >
              +
            </button>
          </div>
        </div>

        {/* Project Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Age: <span className="text-black font-bold">{inputs.projectAge}</span> months
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setInputs(prev => ({ ...prev, projectAge: Math.max(0, prev.projectAge - 6) }))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-semibold transition-colors"
              aria-label="Decrease project age"
            >
              −
            </button>
            <input
              type="range"
              min="0"
              max="60"
              step="6"
              value={inputs.projectAge}
              onChange={(e) => setInputs(prev => ({ ...prev, projectAge: Number(e.target.value) }))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
              aria-label="Project age slider"
            />
            <button
              onClick={() => setInputs(prev => ({ ...prev, projectAge: Math.min(60, prev.projectAge + 6) }))}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-semibold transition-colors"
              aria-label="Increase project age"
            >
              +
            </button>
          </div>
        </div>

        {/* Shortcuts Taken */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Technical Shortcuts: <span className="text-black font-bold">{inputs.shortcuts}</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={inputs.shortcuts}
            onChange={(e) => setInputs(prev => ({ ...prev, shortcuts: Number(e.target.value) }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#EF4444]"
            aria-label="Technical shortcuts slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Few shortcuts</span>
            <span>Many shortcuts</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Skipped tests, TODO comments, quick fixes, copy-paste code</p>
        </div>

        {/* Test Coverage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Test Coverage: <span className="text-black font-bold">{inputs.testCoverage}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={inputs.testCoverage}
            onChange={(e) => setInputs(prev => ({ ...prev, testCoverage: Number(e.target.value) }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
            aria-label="Test coverage slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Code Review Practice */}
        <div>
          <label htmlFor="codeReview" className="block text-sm font-medium text-gray-700 mb-2">
            Code Review Practice
          </label>
          <select
            id="codeReview"
            value={inputs.codeReview}
            onChange={(e) => setInputs(prev => ({ ...prev, codeReview: e.target.value as CalculatorInputs['codeReview'] }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
          >
            <option value="never">Never</option>
            <option value="sometimes">Sometimes</option>
            <option value="always">Always</option>
          </select>
        </div>

        {/* Deployment Frequency */}
        <div>
          <label htmlFor="deployment" className="block text-sm font-medium text-gray-700 mb-2">
            Deployment Frequency
          </label>
          <select
            id="deployment"
            value={inputs.deployment}
            onChange={(e) => setInputs(prev => ({ ...prev, deployment: e.target.value as CalculatorInputs['deployment'] }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
          >
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
            <option value="multiple">Multiple per day</option>
          </select>
        </div>
      </div>

      {/* Results Section */}
      <div className="border-t border-gray-200 pt-6">
        {/* Primary Result */}
        <div className="text-center mb-6">
          <div className="text-sm text-gray-600 mb-2">Your Technical Debt Cost</div>
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EF4444] to-[#DC2626] bg-clip-text text-transparent mb-2">
            {formatCurrency(animatedTotalCost)}
          </div>
          <div className="text-sm text-gray-600">
            {formatNumber(results.hoursWasted)} hours wasted on rework and debugging
          </div>
          <div className="text-xs text-gray-500 mt-2">
            📈 {results.debtInterestRate}% annual debt interest rate
          </div>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Your Way */}
          <div className="bg-red-50 rounded-lg p-4 border border-red-100">
            <div className="text-xs text-gray-600 mb-2 text-center">Your Way</div>
            <div className="text-2xl font-bold text-red-600 text-center">
              {formatCurrency(animatedTotalCost)}
            </div>
            <div className="text-xs text-gray-500 text-center mt-1">
              {formatNumber(results.hoursWasted)} hrs
            </div>
          </div>

          {/* Holtzman Way */}
          <div className="bg-green-50 rounded-lg p-4 border border-green-100">
            <div className="text-xs text-gray-600 mb-2 text-center flex items-center justify-center gap-1">
              <span>Holtzman Way</span>
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-green-600 text-center">
              {formatCurrency(animatedHoltzmanCost)}
            </div>
            <div className="text-xs text-gray-500 text-center mt-1">
              {formatNumber(Math.round(results.holtzmanCost / 100))} hrs
            </div>
          </div>
        </div>

        {/* Savings Callout */}
        <div className="bg-gradient-to-r from-[#f8f5ff] to-white rounded-lg p-4 text-center border border-[#7C3AED]/20">
          <div className="text-sm text-gray-700 mb-1">
            You could save
          </div>
          <div className="text-2xl md:text-3xl font-bold text-[#7C3AED] mb-1">
            {formatCurrency(animatedSavings)}
          </div>
          <div className="text-sm text-gray-600">
            ({results.savingsPercentage}% reduction)
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <a
            href="/contact"
            className="block w-full text-center px-6 py-3 gradient-cta font-semibold"
          >
            Eliminate technical debt before it begins →
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Estimates based on SQALE methodology and industry research. Actual costs may vary.
        </p>
      </div>
    </div>
  );
}
