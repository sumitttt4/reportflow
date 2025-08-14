import { Bot, Database, Calendar, Bell, TrendingUp, Shield, Zap, Download } from 'lucide-react';
import Card from '../ui/Card';

const features = [
	{
		icon: Bot,
		title: 'Smart Report Generation',
		description:
			'Our system learns from your data to highlight important changes and summarize key findings in plain English.',
	},
	{
		icon: Database,
		title: 'Easy Data Import',
		description:
			'Import from spreadsheets, databases, and popular tools like QuickBooks and Stripe - no coding needed.',
	},
	{
		icon: Calendar,
		title: 'Flexible Scheduling',
		description:
			'Choose when your reports run - daily, weekly, or monthly. Set it once and we handle the rest.',
	},
	{
		icon: Bell,
		title: 'Delivery Options',
		description:
			'Get reports right where you need them - in your email, Slack, or Teams. Access past reports anytime.',
	},
	{
		icon: TrendingUp,
		title: 'Clear Visualizations',
		description:
			'Turn complex data into easy-to-understand charts and graphs. Compare performance across time periods.',
	},
	{
		icon: Shield,
		title: 'Data Security',
		description:
			'Your data is encrypted and protected. Control exactly who sees what with team permissions.',
	},
	{
		icon: Zap,
		title: 'Quick Setup',
		description:
			'We help identify your key metrics and create report templates that match your needs.',
	},
	{
		icon: Download,
		title: 'Export Flexibility',
		description:
			'Save reports as PDFs for meetings, spreadsheets for analysis, or share interactive dashboards.',
	},
];

export default function Features() {
	return (
		<section className="py-20 transition-colors duration-300 bg-black">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
					Everything You Need to Automate Reports
				</h2>
				<p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
					Our platform handles the entire reporting workflow, from data collection
					to AI-enhanced delivery, so you can focus on what the data tells you
					instead of gathering it.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-left"
						>
							<div className="mb-2 text-blue-600 dark:text-blue-400">
								<feature.icon className="h-6 w-6" />
							</div>
							<h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">
								{feature.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								{feature.description}
							</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
