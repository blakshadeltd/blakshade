"use client"
import { useState } from 'react';

// Define types for our data and sorting
interface CountryData {
    country: string;
    code: string;
    singlePhase: number;
    threePhase: number;
    frequency: number;
}

type SortableKey = keyof Omit<CountryData, 'code'>;

interface SortConfig {
    key: SortableKey;
    direction: 'ascending' | 'descending';
}

// (your countryData unchanged — paste your full list here)
const countryData: CountryData[] = [
    { country: 'Afghanistan', code: 'AF', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Albania', code: 'AL', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Algeria', code: 'DZ', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'American Samoa', code: 'AS', singlePhase: 120, threePhase: 208, frequency: 60 },
    { country: 'Andorra', code: 'AD', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Angola', code: 'AO', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Anguilla', code: 'AI', singlePhase: 110, threePhase: 120, frequency: 60 },
    { country: 'Antigua and Barbuda', code: 'AG', singlePhase: 230, threePhase: 400, frequency: 60 },
    { country: 'Argentina', code: 'AR', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Armenia', code: 'AM', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Aruba', code: 'AW', singlePhase: 120, threePhase: 220, frequency: 60 },
    { country: 'Australia', code: 'AU', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Austria', code: 'AT', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Azerbaijan', code: 'AZ', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Bahamas', code: 'BS', singlePhase: 120, threePhase: 208, frequency: 60 },
    { country: 'Bahrain', code: 'BH', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Bangladesh', code: 'BD', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Barbados', code: 'BB', singlePhase: 115, threePhase: 200, frequency: 50 },
    { country: 'Belarus', code: 'BY', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Belgium', code: 'BE', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Belize', code: 'BZ', singlePhase: 110, threePhase: 190, frequency: 60 },
    { country: 'Benin', code: 'BJ', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Bermuda', code: 'BM', singlePhase: 120, threePhase: 208, frequency: 60 },
    { country: 'Bhutan', code: 'BT', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Bolivia', code: 'BO', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Bosnia & Herzegovina', code: 'BA', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Botswana', code: 'BW', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Brazil', code: 'BR', singlePhase: 127, threePhase: 220, frequency: 60 },
    { country: 'Brunei', code: 'BN', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Bulgaria', code: 'BG', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Burkina Faso', code: 'BF', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Burundi', code: 'BI', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Cambodia', code: 'KH', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Cameroon', code: 'CM', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Canada', code: 'CA', singlePhase: 120, threePhase: 208, frequency: 60 },
    { country: 'Cape Verde', code: 'CV', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Chad', code: 'TD', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Chile', code: 'CL', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'China', code: 'CN', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Colombia', code: 'CO', singlePhase: 110, threePhase: 220, frequency: 60 },
    { country: 'Comoros', code: 'KM', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Congo', code: 'CG', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Costa Rica', code: 'CR', singlePhase: 120, threePhase: 240, frequency: 60 },
    { country: 'Croatia', code: 'HR', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Cuba', code: 'CU', singlePhase: 110, threePhase: 190, frequency: 60 },
    { country: 'Cyprus', code: 'CY', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Czech Republic', code: 'CZ', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Denmark', code: 'DK', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Djibouti', code: 'DJ', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Dominica', code: 'DM', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Dominican Republic', code: 'DO', singlePhase: 120, threePhase: 120, frequency: 60 },
    { country: 'Ecuador', code: 'EC', singlePhase: 120, threePhase: 208, frequency: 60 },
    { country: 'Egypt', code: 'EG', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'El Salvador', code: 'SV', singlePhase: 120, threePhase: 200, frequency: 60 },
    { country: 'Eritrea', code: 'ER', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Estonia', code: 'EE', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Ethiopia', code: 'ET', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Fiji', code: 'FJ', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Finland', code: 'FI', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'France', code: 'FR', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Gabon', code: 'GA', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Gambia', code: 'GM', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Georgia', code: 'GE', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Germany', code: 'DE', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Ghana', code: 'GH', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Greece', code: 'GR', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Grenada', code: 'GD', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Guatemala', code: 'GT', singlePhase: 120, threePhase: 208, frequency: 60 },
    { country: 'Guinea', code: 'GN', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Guyana', code: 'GY', singlePhase: 120, threePhase: 190, frequency: 60 },
    { country: 'Haiti', code: 'HT', singlePhase: 110, threePhase: 190, frequency: 60 },
    { country: 'Honduras', code: 'HN', singlePhase: 110, threePhase: 190, frequency: 60 },
    { country: 'Hong Kong', code: 'HK', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Hungary', code: 'HU', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Iceland', code: 'IS', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'India', code: 'IN', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Indonesia', code: 'ID', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Iran', code: 'IR', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Iraq', code: 'IQ', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Ireland', code: 'IE', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Israel', code: 'IL', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Italy', code: 'IT', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Jamaica', code: 'JM', singlePhase: 110, threePhase: 190, frequency: 50 },
    { country: 'Japan', code: 'JP', singlePhase: 100, threePhase: 200, frequency: 50 },
    { country: 'Jordan', code: 'JO', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Kazakhstan', code: 'KZ', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Kenya', code: 'KE', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Kiribati', code: 'KI', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Kuwait', code: 'KW', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Kyrgyzstan', code: 'KG', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Laos', code: 'LA', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Latvia', code: 'LV', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Lebanon', code: 'LB', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Lesotho', code: 'LS', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Liberia', code: 'LR', singlePhase: 120, threePhase: 208, frequency: 60 },
    { country: 'Libya', code: 'LY', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Liechtenstein', code: 'LI', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Lithuania', code: 'LT', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Luxembourg', code: 'LU', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Macau', code: 'MO', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Madagascar', code: 'MG', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Malawi', code: 'MW', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Malaysia', code: 'MY', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Maldives', code: 'MV', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Mali', code: 'ML', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Malta', code: 'MT', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Mauritania', code: 'MR', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Mauritius', code: 'MU', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Mexico', code: 'MX', singlePhase: 127, threePhase: 220, frequency: 60 },
    { country: 'Moldova', code: 'MD', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Monaco', code: 'MC', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Mongolia', code: 'MN', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Montenegro', code: 'ME', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Morocco', code: 'MA', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Mozambique', code: 'MZ', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Myanmar', code: 'MM', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Namibia', code: 'NA', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Nepal', code: 'NP', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Netherlands', code: 'NL', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'New Zealand', code: 'NZ', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Nicaragua', code: 'NI', singlePhase: 120, threePhase: 208, frequency: 60 },
    { country: 'Niger', code: 'NE', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Nigeria', code: 'NG', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'North Macedonia', code: 'MK', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Norway', code: 'NO', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Oman', code: 'OM', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Pakistan', code: 'PK', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Panama', code: 'PA', singlePhase: 120, threePhase: 240, frequency: 60 },
    { country: 'Papua New Guinea', code: 'PG', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Paraguay', code: 'PY', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Peru', code: 'PE', singlePhase: 220, threePhase: 220, frequency: 60 },
    { country: 'Philippines', code: 'PH', singlePhase: 220, threePhase: 380, frequency: 60 },
    { country: 'Poland', code: 'PL', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Portugal', code: 'PT', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Puerto Rico', code: 'PR', singlePhase: 120, threePhase: 208, frequency: 60 },
    { country: 'Qatar', code: 'QA', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Romania', code: 'RO', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Russia', code: 'RU', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Rwanda', code: 'RW', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Saint Kitts and Nevis', code: 'KN', singlePhase: 230, threePhase: 400, frequency: 60 },
    { country: 'Saint Lucia', code: 'LC', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Saint Vincent', code: 'VC', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Samoa', code: 'WS', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Saudi Arabia', code: 'SA', singlePhase: 220, threePhase: 380, frequency: 60 },
    { country: 'Senegal', code: 'SN', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Serbia', code: 'RS', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Seychelles', code: 'SC', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Sierra Leone', code: 'SL', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Singapore', code: 'SG', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Slovakia', code: 'SK', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Slovenia', code: 'SI', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Solomon Islands', code: 'SB', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Somalia', code: 'SO', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'South Africa', code: 'ZA', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'South Korea', code: 'KR', singlePhase: 220, threePhase: 380, frequency: 60 },
    { country: 'Spain', code: 'ES', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Sri Lanka', code: 'LK', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Sudan', code: 'SD', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Suriname', code: 'SR', singlePhase: 127, threePhase: 220, frequency: 60 },
    { country: 'Sweden', code: 'SE', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Switzerland', code: 'CH', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Syria', code: 'SY', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Taiwan', code: 'TW', singlePhase: 110, threePhase: 220, frequency: 60 },
    { country: 'Tajikistan', code: 'TJ', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Tanzania', code: 'TZ', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Thailand', code: 'TH', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Togo', code: 'TG', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Tonga', code: 'TO', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Trinidad & Tobago', code: 'TT', singlePhase: 115, threePhase: 115, frequency: 60 },
    { country: 'Tunisia', code: 'TN', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Turkey', code: 'TR', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Turkmenistan', code: 'TM', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Uganda', code: 'UG', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'Ukraine', code: 'UA', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'United Arab Emirates', code: 'AE', singlePhase: 240, threePhase: 415, frequency: 50 },
    { country: 'United Kingdom', code: 'GB', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'United States', code: 'US', singlePhase: 120, threePhase: 208, frequency: 60 },
    { country: 'Uruguay', code: 'UY', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Uzbekistan', code: 'UZ', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Vanuatu', code: 'VU', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Venezuela', code: 'VE', singlePhase: 120, threePhase: 240, frequency: 60 },
    { country: 'Vietnam', code: 'VN', singlePhase: 220, threePhase: 380, frequency: 50 },
    { country: 'Yemen', code: 'YE', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Zambia', code: 'ZM', singlePhase: 230, threePhase: 400, frequency: 50 },
    { country: 'Zimbabwe', code: 'ZW', singlePhase: 220, threePhase: 380, frequency: 50 }
];

export default function CountryVoltageList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState<SortConfig>({
        key: 'country',
        direction: 'ascending'
    });

    // Filter countries based on search term
    const filteredCountries = countryData.filter(country =>
        country.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort countries
    const sortedCountries = [...filteredCountries].sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        // For numeric values, compare directly
        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortConfig.direction === 'ascending' ? aValue - bValue : bValue - aValue;
        }

        // For string values
        if (aValue < bValue) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    // Handle sorting
    const requestSort = (key: SortableKey) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <section>
            {/* Header Section */}
            <div
                className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
                style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
            >
                <div className="container h-full flex flex-col justify-end pb-4 px-6">
                    <h1 className="text-[var(--background)] text-2xl md:text-4xl">Worldwide AC Voltage & Frequency Guide</h1>
                </div>
            </div>

            {/* Main Content */}
{/* Main Content */}
            <main className="container px-2 md:px-4 py-6 md:py-8">
                {/* Search and Info Section */}
                <div className="mb-6 md:mb-8">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4 md:mb-6">
                        <div className="relative w-full md:w-1/3">
                            <input
                                type="text"
                                placeholder="Search for a country..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-2 text-gray-500 hover:text-[var(--foreground)]"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        <div className="bg-gray-100 p-3 md:p-4 rounded-lg text-sm md:text-base">
                            <p>
                                <strong>Note:</strong> Some countries may have regional variations. Always verify local standards.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-md energy-pulse">
                            <h3 className="mb-1 md:mb-2 text-sm md:text-base">Single-Phase Voltage</h3>
                            <p className="font-normal text-xs md:text-sm">Typically used for residential applications</p>
                        </div>
                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-md energy-pulse">
                            <h3 className="mb-1 md:mb-2 text-sm md:text-base">Three-Phase Voltage</h3>
                            <p className="font-normal text-xs md:text-sm">Used for industrial applications</p>
                        </div>
                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-md energy-pulse">
                            <h3 className="mb-1 md:mb-2 text-sm md:text-base">Frequency (Hz)</h3>
                            <p className="font-normal text-xs md:text-sm">Most countries use 50Hz, some use 60Hz</p>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <div className="min-w-[600px] md:min-w-[800px]">
                            {/* Header */}
                            <div
                                className="grid grid-cols-[10%_40%_15%_15%_20%] lg:grid-cols-[8%_52%_13%_13%_14%] bg-gray-50 text-xs text-gray-500 uppercase tracking-wider"
                                role="row"
                            >
                                <div className="p-2 md:px-4 md:py-3 text-center border-b border-gray-200">Flag</div>

                                <button
                                    onClick={() => requestSort('country')}
                                    className="p-2 md:px-4 md:py-3 text-left border-b border-gray-200 flex gap-1 md:gap-2 items-center cursor-pointer"
                                    aria-label="Sort by country"
                                >
                                    <span className="leading-none">Country</span>
                                    <span className="min-w-[14px] md:min-w-[18px] text-gray-400">
                                        {sortConfig.key === 'country' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
                                    </span>
                                </button>

                                <button
                                    onClick={() => requestSort('singlePhase')}
                                    className="p-2 md:px-4 md:py-3 border-b border-gray-200 flex gap-1 md:gap-2 cursor-pointer"
                                    aria-label="Sort by single phase"
                                >
                                    <span className="leading-none">Single-Phase (V)</span>
                                    <span className="min-w-[14px] md:min-w-[18px] text-gray-400">
                                        {sortConfig.key === 'singlePhase' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
                                    </span>
                                </button>

                                <button
                                    onClick={() => requestSort('threePhase')}
                                    className="p-2 md:px-4 md:py-3 border-b border-gray-200 flex gap-1 md:gap-2 cursor-pointer"
                                    aria-label="Sort by three phase"
                                >
                                    <span className="leading-none">Three-Phase (V)</span>
                                    <span className="min-w-[14px] md:min-w-[18px] text-gray-400">
                                        {sortConfig.key === 'threePhase' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
                                    </span>
                                </button>

                                <button
                                    onClick={() => requestSort('frequency')}
                                    className="p-2 md:px-4 md:py-3 border-b border-gray-200 flex gap-1 md:gap-2 cursor-pointer"
                                    aria-label="Sort by frequency"
                                >
                                    <span className="leading-none">Frequency (Hz)</span>
                                    <span className="min-w-[14px] md:min-w-[18px] text-gray-400">
                                        {sortConfig.key === 'frequency' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
                                    </span>
                                </button>
                            </div>

                            {/* Rows */}
                            <div className="divide-y divide-gray-200">
                                {sortedCountries.map((country, i) => (
                                    <div
                                        key={i}
                                        className="grid grid-cols-[10%_40%_15%_15%_20%] md:grid-cols-[8%_52%_13%_13%_14%] items-center hover:bg-gray-50 transition-colors duration-150"
                                        role="row"
                                    >
                                        <div className="p-2 md:px-4 md:py-3 text-center">
                                            <img
                                                src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                                alt={`${country.country} flag`}
                                                className="inline-block w-6 h-4 md:w-8 md:h-6 object-contain rounded shadow-sm"
                                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                            />
                                        </div>

                                        <div className="p-2 md:px-4 md:py-3 text-gray-900 font-medium text-sm md:text-base truncate">
                                            {country.country}
                                        </div>

                                        <div className="p-2 md:px-4 md:py-3 font-mono whitespace-nowrap text-sm md:text-base">
                                            {country.singlePhase} V
                                        </div>

                                        <div className="p-2 md:px-4 md:py-3 font-mono whitespace-nowrap text-sm md:text-base">
                                            {country.threePhase} V
                                        </div>

                                        <div className="p-2 md:px-4 md:py-3 font-mono whitespace-nowrap text-sm md:text-base">
                                            {country.frequency} Hz
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
                    Showing {sortedCountries.length} of {countryData.length} countries
                </div>
            </main>
        </section>
    );
}