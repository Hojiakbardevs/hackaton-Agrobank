/** @jsxImportSource react */
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { year: '2023', cases: 12000, damage: 400 },
    { year: '2024', cases: 28000, damage: 800 },
    { year: '2025', cases: 46000, damage: 1200 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-card border border-red-500/30 p-4 rounded-lg shadow-xl backdrop-blur-md">
                <p className="text-foreground font-bold mb-3">{label}</p>
                <p className="text-red-500 text-sm mb-2">
                    Holatlar: <span className="font-bold text-foreground">{payload[0].value.toLocaleString()}</span>
                </p>
                {payload[1] && (
                    <div className="border-t border-border pt-2">
                        <p className="text-orange-500 text-sm mb-1">
                            Zarar:
                        </p>
                        <p className="text-2xl font-bold text-orange-500">
                            {payload[1].value} mlrd so'm
                        </p>
                    </div>
                )}
            </div>
        );
    }
    return null;
};

export const FraudChart = () => {
    return (
        <div className="w-full h-[450px] bg-card border border-border rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-60" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
                <div>
                    <h3 className="text-xl font-bold text-foreground">Firibgarlik O'sish Dinamikasi</h3>
                    <p className="text-sm text-muted-foreground">2023–2025 yillar kesimida</p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs text-red-500 font-medium w-fit">
                    Manba: IIV va Markaziy bank
                </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height="80%">
                <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorCasesBar" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#EF4444" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#EF4444" stopOpacity={0.4} />
                        </linearGradient>
                        <linearGradient id="colorDamageBar" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F97316" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#F97316" stopOpacity={0.4} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="currentColor"
                        className="text-border opacity-30"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="year"
                        stroke="currentColor"
                        className="text-muted-foreground"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="currentColor"
                        className="text-muted-foreground"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value / 1000}k`}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ fill: 'rgba(239, 68, 68, 0.1)' }}
                    />
                    <Bar
                        dataKey="cases"
                        fill="url(#colorCasesBar)"
                        animationDuration={1500}
                        animationBegin={300}
                        radius={[8, 8, 0, 0]}
                        maxBarSize={60}
                    />
                    <Bar
                        dataKey="damage"
                        fill="url(#colorDamageBar)"
                        animationDuration={1500}
                        animationBegin={600}
                        radius={[8, 8, 0, 0]}
                        maxBarSize={60}
                    />
                </BarChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="absolute bottom-4 right-6 flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-gradient-to-b from-red-500 to-red-500/40" />
                    <span className="text-muted-foreground">Holatlar soni</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-gradient-to-b from-orange-500 to-orange-500/40" />
                    <span className="text-muted-foreground">Zarar (mlrd)</span>
                </div>
            </div>
        </div>
    );
};
