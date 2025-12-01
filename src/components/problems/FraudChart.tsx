/** @jsxImportSource react */
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2023", cases: 12000, damage: 400 },
  { year: "2024", cases: 28000, damage: 800 },
  { year: "2025", cases: 46000, damage: 1200 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/95 backdrop-blur-sm border border-red-500/30 p-4 rounded-lg shadow-2xl">
        <p className="text-white font-semibold mb-3 text-lg">{label}-yil</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="text-gray-300 text-sm">Aldanish holatlari:</span>
            <span className="text-red-400 font-bold ml-auto">
              {payload[0].value.toLocaleString()} ta
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full" />
            <span className="text-gray-300 text-sm">Moliyaviy zarar:</span>
            <span className="text-orange-400 font-bold ml-auto">
              {payload[1].value.toLocaleString()} mlrd so'm
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const FraudChart = () => {
  return (
    <div className="w-full h-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-red-500/20">
      {/* Top accent line */}
      <div className="w-full h-1 bg-linear-to-r from-red-600 via-orange-500 to-red-600 rounded-full mb-6" />

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Firibgarlik O'sish Dinamikasi
        </h2>
        <p className="text-gray-400 text-sm">2023–2025 yillar kesimida</p>
        <p className="text-gray-500 text-xs mt-1">
          Manba: IIV va Markaziy bank
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis
            dataKey="year"
            stroke="#9CA3AF"
            style={{ fontSize: "14px", fontWeight: 500 }}
          />
          <YAxis
            yAxisId="left"
            stroke="#EF4444"
            style={{ fontSize: "12px" }}
            label={{
              value: "Holatlar soni",
              angle: -90,
              position: "insideLeft",
              fill: "#EF4444",
            }}
            tickFormatter={(value) => {
              if (value >= 1000) return `${value / 1000}k`;
              return value;
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#F97316"
            style={{ fontSize: "12px" }}
            label={{
              value: "Zarar (mlrd so'm)",
              angle: 90,
              position: "insideRight",
              fill: "#F97316",
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(239, 68, 68, 0.1)" }}
          />
          <Bar
            yAxisId="left"
            dataKey="cases"
            fill="#EF4444"
            radius={[8, 8, 0, 0]}
            name="Aldanish holatlari"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="damage"
            stroke="#F97316"
            strokeWidth={3}
            dot={{ fill: "#F97316", r: 6 }}
            activeDot={{ r: 8 }}
            name="Moliyaviy zarar (mlrd so'm)"
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex justify-center gap-8 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded" />
          <span className="text-gray-300 text-sm">Aldanish holatlari (ta)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full" />
          <span className="text-gray-300 text-sm">
            Moliyaviy zarar (mlrd so'm)
          </span>
        </div>
      </div>
    </div>
  );
};
