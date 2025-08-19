import { OverviewCard } from './components/overview-card';
import { SalesOverview } from './sales-overview';

export default function OverviewSection() {
  return (
    <div className='grid grid-cols-3 gap-5'>
      <SalesOverview />

      <div className='grid grid-row-2 gap-5'>
        <OverviewCard
          icon={{ src: '/assets/main/home.png', alt: 'Home' }}
          name='Listings Overview'
          stats={[
            { title: 'Total', value: '1.8k' },
            { title: 'Active', value: '80' },
            { title: 'Archive', value: '1k' },
          ]}
        />
        <OverviewCard
          icon={{src: "/assets/main/profile.png", alt:"User"}}
          name='Users Overview'
          stats={[
            { title: 'Total', value: '20.7k' },
            { title: 'Riders', value: '8.5k' },
            { title: 'Subscribers', value: '7.5k' },
          ]}
        />
      </div>
    </div>
  );
}
