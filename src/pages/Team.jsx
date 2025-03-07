import React, { useState } from 'react';
import TeamMember from '../components/TeamMember';

const Team = () => {
    // State to track which team is selected
    const [activeTeam, setActiveTeam] = useState('all');
    
    // Define all teams with their members
    const teams = {
        core: {
            name: "Core Team",
            description: "Oversees decision-making and overall strategy",
            members: [
                {
                    id: 1,
                    name: 'John Matthews',
                    role: 'Chief Coordinator',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 2,
                    name: 'Emma Wilson',
                    role: 'Deputy Coordinator',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 3,
                    name: 'Michael Chen',
                    role: 'Senior Strategist',
                    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3'
                }
            ]
        },
        management: {
            name: "Management Team",
            description: "Handles logistics, planning, and operations",
            members: [
                {
                    id: 4,
                    name: 'Sarah Johnson',
                    role: 'Operations Lead',
                    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 5,
                    name: 'David Lee',
                    role: 'Logistics Manager',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 6,
                    name: 'Rebecca Patel',
                    role: 'Planning Coordinator',
                    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3'
                }
            ]
        },
        design: {
            name: "Design Team",
            description: "Manages branding, graphics, and UI/UX",
            members: [
                {
                    id: 7,
                    name: 'Alex Morgan',
                    role: 'Creative Director',
                    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 8,
                    name: 'Priya Singh',
                    role: 'UI/UX Lead',
                    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 9,
                    name: 'Jake Thompson',
                    role: 'Graphic Designer',
                    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 10,
                    name: 'Mei Lin',
                    role: 'Brand Specialist',
                    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3'
                }
            ]
        },
        cultural: {
            name: "Cultural Team",
            description: "Organizes social and cultural events",
            members: [
                {
                    id: 11,
                    name: 'Raj Sharma',
                    role: 'Events Head',
                    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 12,
                    name: 'Sophia Martinez',
                    role: 'Cultural Affairs',
                    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 13,
                    name: 'Adam Wilson',
                    role: 'Program Coordinator',
                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
                }
            ]
        },
        social: {
            name: "Social Media Team",
            description: "Manages online presence and promotions",
            members: [
                {
                    id: 14,
                    name: 'Nina Rodriguez',
                    role: 'Social Media Manager',
                    image: 'https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 15,
                    name: 'Tyler Gibson',
                    role: 'Content Creator',
                    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 16,
                    name: 'Hannah Park',
                    role: 'Community Manager',
                    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 17,
                    name: 'Lucas Brown',
                    role: 'Digital Strategist',
                    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3'
                }
            ]
        },
        finance: {
            name: "Finance Team",
            description: "Handles budgeting and sponsorships",
            members: [
                {
                    id: 18,
                    name: 'Victor Ortega',
                    role: 'Finance Officer',
                    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 19,
                    name: 'Olivia Kim',
                    role: 'Sponsorship Lead',
                    image: 'https://images.unsplash.com/photo-1605405748313-a416a1b84491?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 20,
                    name: 'Ethan Wright',
                    role: 'Budget Analyst',
                    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
                }
            ]
        },
        sports: {
            name: "Sports Team",
            description: "Organizes sports events and competitions",
            members: [
                {
                    id: 21,
                    name: 'Marcus Johnson',
                    role: 'Sports Coordinator',
                    image: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 22,
                    name: 'Jessica Liu',
                    role: 'Events Manager',
                    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3'
                },
                {
                    id: 23,
                    name: 'Carlos Mendez',
                    role: 'Tournament Head',
                    image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3'
                }
            ]
        }
    };
    
    return (
        <>
            
                <div className="flex flex-col items-center min-h-screen py-12 px-4">
                    <h1 className='text-5xl md:text-6xl bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text font-medium mb-8'>Meet Our Team</h1>
                    
                    {/* Team Selection Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        <button 
                            className={`px-4 py-2 rounded-full text-sm transition-all ${activeTeam === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                            onClick={() => setActiveTeam('all')}
                        >
                            All Teams
                        </button>
                        {Object.keys(teams).map((teamKey) => (
                            <button 
                                key={teamKey}
                                className={`px-4 py-2 rounded-full text-sm transition-all ${activeTeam === teamKey ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                                onClick={() => setActiveTeam(teamKey)}
                            >
                                {teams[teamKey].name}
                            </button>
                        ))}
                    </div>
                    
                    {/* Display all teams or selected team */}
                    {(activeTeam === 'all' ? Object.keys(teams) : [activeTeam]).map((teamKey) => (
                        <div className="mb-16 w-full max-w-7xl" key={teamKey}>
                            <div className="mb-6 text-center">
                                <h2 className="text-3xl text-white font-semibold mb-2">{teams[teamKey].name}</h2>
                                <p className="text-gray-400">{teams[teamKey].description}</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                {teams[teamKey].members.map(member => (
                                    <TeamMember 
                                        key={member.id}
                                        name={member.name}
                                        role={member.role}
                                        image={member.image}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            
        </>
    );
};

export default Team;