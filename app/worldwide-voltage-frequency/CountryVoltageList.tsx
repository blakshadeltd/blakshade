"use client"
import { useState } from 'react';

// Define types for our data and sorting
interface CountryData {
  country: string;
  code: string;
  singlePhase: number;
  threePhase: number;
  frequency: number;
  wires: number;
  plugType: string;
}

type SortableKey = keyof Omit<CountryData, 'code'>;

interface SortConfig {
  key: SortableKey;
  direction: 'ascending' | 'descending';
}

// (your countryData unchanged — paste your full list here)
const countryData: CountryData[] = [
  { country: 'Afghanistan', code: 'AF', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Albania', code: 'AL', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Algeria', code: 'DZ', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/E/F' },
  { country: 'American Samoa', code: 'AS', singlePhase: 120, threePhase: 208, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Andorra', code: 'AD', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Angola', code: 'AO', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Anguilla', code: 'AI', singlePhase: 110, threePhase: 120, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Antigua and Barbuda', code: 'AG', singlePhase: 230, threePhase: 400, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Argentina', code: 'AR', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'C/I' },
  { country: 'Armenia', code: 'AM', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Aruba', code: 'AW', singlePhase: 120, threePhase: 220, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Australia', code: 'AU', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'I' },
  { country: 'Austria', code: 'AT', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Azerbaijan', code: 'AZ', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Bahamas', code: 'BS', singlePhase: 120, threePhase: 208, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Bahrain', code: 'BH', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Bangladesh', code: 'BD', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'G/D' },
  { country: 'Barbados', code: 'BB', singlePhase: 115, threePhase: 200, frequency: 50, wires: 3, plugType: 'A/B' },
  { country: 'Belarus', code: 'BY', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Belgium', code: 'BE', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/E' },
  { country: 'Belize', code: 'BZ', singlePhase: 110, threePhase: 190, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Benin', code: 'BJ', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Bermuda', code: 'BM', singlePhase: 120, threePhase: 208, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Bhutan', code: 'BT', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'D/G' },
  { country: 'Bolivia', code: 'BO', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'A/C' },
  { country: 'Bosnia & Herzegovina', code: 'BA', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Botswana', code: 'BW', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Brazil', code: 'BR', singlePhase: 127, threePhase: 220, frequency: 60, wires: 3, plugType: 'N/C' },
  { country: 'Brunei', code: 'BN', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Bulgaria', code: 'BG', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Burkina Faso', code: 'BF', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Burundi', code: 'BI', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Cambodia', code: 'KH', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'A/C' },
  { country: 'Cameroon', code: 'CM', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Canada', code: 'CA', singlePhase: 120, threePhase: 208, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Cape Verde', code: 'CV', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Chad', code: 'TD', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Chile', code: 'CL', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'C/L' },
  { country: 'China', code: 'CN', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'A/I' },
  { country: 'Colombia', code: 'CO', singlePhase: 110, threePhase: 220, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Comoros', code: 'KM', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Congo', code: 'CG', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Costa Rica', code: 'CR', singlePhase: 120, threePhase: 240, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Croatia', code: 'HR', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Cuba', code: 'CU', singlePhase: 110, threePhase: 190, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Cyprus', code: 'CY', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Czech Republic', code: 'CZ', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/E' },
  { country: 'Denmark', code: 'DK', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Djibouti', code: 'DJ', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Dominica', code: 'DM', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Dominican Republic', code: 'DO', singlePhase: 120, threePhase: 120, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Ecuador', code: 'EC', singlePhase: 120, threePhase: 208, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Egypt', code: 'EG', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'El Salvador', code: 'SV', singlePhase: 120, threePhase: 200, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Eritrea', code: 'ER', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Estonia', code: 'EE', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Ethiopia', code: 'ET', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Fiji', code: 'FJ', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'I' },
  { country: 'Finland', code: 'FI', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'France', code: 'FR', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/E' },
  { country: 'Gabon', code: 'GA', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Gambia', code: 'GM', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'G/D' },
  { country: 'Georgia', code: 'GE', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Germany', code: 'DE', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Ghana', code: 'GH', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'D/G' },
  { country: 'Greece', code: 'GR', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Grenada', code: 'GD', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Guatemala', code: 'GT', singlePhase: 120, threePhase: 208, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Guinea', code: 'GN', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Guyana', code: 'GY', singlePhase: 120, threePhase: 190, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Haiti', code: 'HT', singlePhase: 110, threePhase: 190, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Honduras', code: 'HN', singlePhase: 110, threePhase: 190, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Hong Kong', code: 'HK', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Hungary', code: 'HU', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Iceland', code: 'IS', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'India', code: 'IN', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'D/M/C' },
  { country: 'Indonesia', code: 'ID', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'C/F' },
  { country: 'Iran', code: 'IR', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Iraq', code: 'IQ', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/D' },
  { country: 'Ireland', code: 'IE', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Israel', code: 'IL', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'H' },
  { country: 'Italy', code: 'IT', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/L' },
  { country: 'Jamaica', code: 'JM', singlePhase: 110, threePhase: 190, frequency: 50, wires: 3, plugType: 'A/B' },
  { country: 'Japan', code: 'JP', singlePhase: 100, threePhase: 200, frequency: 50, wires: 2, plugType: 'A' },
  { country: 'Jordan', code: 'JO', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'G/C' },
  { country: 'Kazakhstan', code: 'KZ', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Kenya', code: 'KE', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Kiribati', code: 'KI', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'I' },
  { country: 'Kuwait', code: 'KW', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Kyrgyzstan', code: 'KG', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Laos', code: 'LA', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'C' },
  { country: 'Latvia', code: 'LV', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Lebanon', code: 'LB', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/L' },
  { country: 'Lesotho', code: 'LS', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'M/C' },
  { country: 'Liberia', code: 'LR', singlePhase: 120, threePhase: 208, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Libya', code: 'LY', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Liechtenstein', code: 'LI', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Lithuania', code: 'LT', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Luxembourg', code: 'LU', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Macau', code: 'MO', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Madagascar', code: 'MG', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/E' },
  { country: 'Malawi', code: 'MW', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'G' },
  { country: 'Malaysia', code: 'MY', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Maldives', code: 'MV', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Mali', code: 'ML', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Malta', code: 'MT', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Mauritania', code: 'MR', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Mauritius', code: 'MU', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'C/G' },
  { country: 'Mexico', code: 'MX', singlePhase: 127, threePhase: 220, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Moldova', code: 'MD', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Monaco', code: 'MC', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/E' },
  { country: 'Mongolia', code: 'MN', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Montenegro', code: 'ME', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Morocco', code: 'MA', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/E' },
  { country: 'Mozambique', code: 'MZ', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Myanmar', code: 'MM', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'C/D' },
  { country: 'Namibia', code: 'NA', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'M/G' },
  { country: 'Nepal', code: 'NP', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/D' },
  { country: 'Netherlands', code: 'NL', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'New Zealand', code: 'NZ', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'I' },
  { country: 'Nicaragua', code: 'NI', singlePhase: 120, threePhase: 208, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Niger', code: 'NE', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Nigeria', code: 'NG', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'D/G' },
  { country: 'North Macedonia', code: 'MK', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Norway', code: 'NO', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Oman', code: 'OM', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Pakistan', code: 'PK', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'D/G' },
  { country: 'Panama', code: 'PA', singlePhase: 120, threePhase: 240, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Papua New Guinea', code: 'PG', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'I' },
  { country: 'Paraguay', code: 'PY', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'C' },
  { country: 'Peru', code: 'PE', singlePhase: 220, threePhase: 220, frequency: 60, wires: 3, plugType: 'A/C' },
  { country: 'Philippines', code: 'PH', singlePhase: 220, threePhase: 380, frequency: 60, wires: 3, plugType: 'A/B/C' },
  { country: 'Poland', code: 'PL', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/E' },
  { country: 'Portugal', code: 'PT', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Puerto Rico', code: 'PR', singlePhase: 120, threePhase: 208, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Qatar', code: 'QA', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Romania', code: 'RO', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Russia', code: 'RU', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Rwanda', code: 'RW', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Saint Kitts and Nevis', code: 'KN', singlePhase: 230, threePhase: 400, frequency: 60, wires: 3, plugType: 'G' },
  { country: 'Saint Lucia', code: 'LC', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Saint Vincent', code: 'VC', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Samoa', code: 'WS', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'I' },
  { country: 'Saudi Arabia', code: 'SA', singlePhase: 220, threePhase: 380, frequency: 60, wires: 4, plugType: 'G' },
  { country: 'Senegal', code: 'SN', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Serbia', code: 'RS', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Seychelles', code: 'SC', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Sierra Leone', code: 'SL', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'D/G' },
  { country: 'Singapore', code: 'SG', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Slovakia', code: 'SK', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Slovenia', code: 'SI', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Solomon Islands', code: 'SB', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'I' },
  { country: 'Somalia', code: 'SO', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'South Africa', code: 'ZA', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'M/G' },
  { country: 'South Korea', code: 'KR', singlePhase: 220, threePhase: 380, frequency: 60, wires: 3, plugType: 'F/C' },
  { country: 'Spain', code: 'ES', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Sri Lanka', code: 'LK', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G/D' },
  { country: 'Sudan', code: 'SD', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Suriname', code: 'SR', singlePhase: 127, threePhase: 220, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Sweden', code: 'SE', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Switzerland', code: 'CH', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'J' },
  { country: 'Syria', code: 'SY', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/L' },
  { country: 'Taiwan', code: 'TW', singlePhase: 110, threePhase: 220, frequency: 60, wires: 2, plugType: 'A/B' },
  { country: 'Tajikistan', code: 'TJ', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Tanzania', code: 'TZ', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'G' },
  { country: 'Thailand', code: 'TH', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'A/B/C' },
  { country: 'Togo', code: 'TG', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C' },
  { country: 'Tonga', code: 'TO', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'I' },
  { country: 'Trinidad & Tobago', code: 'TT', singlePhase: 115, threePhase: 115, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Tunisia', code: 'TN', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/E' },
  { country: 'Turkey', code: 'TR', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Turkmenistan', code: 'TM', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Uganda', code: 'UG', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Ukraine', code: 'UA', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'United Arab Emirates', code: 'AE', singlePhase: 240, threePhase: 415, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'United Kingdom', code: 'GB', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'United States', code: 'US', singlePhase: 120, threePhase: 208, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Uruguay', code: 'UY', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'C/L' },
  { country: 'Uzbekistan', code: 'UZ', singlePhase: 220, threePhase: 380, frequency: 50, wires: 4, plugType: 'C/F' },
  { country: 'Vanuatu', code: 'VU', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'I' },
  { country: 'Venezuela', code: 'VE', singlePhase: 120, threePhase: 240, frequency: 60, wires: 3, plugType: 'A/B' },
  { country: 'Vietnam', code: 'VN', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'A/C' },
  { country: 'Yemen', code: 'YE', singlePhase: 230, threePhase: 400, frequency: 50, wires: 4, plugType: 'C/D' },
  { country: 'Zambia', code: 'ZM', singlePhase: 230, threePhase: 400, frequency: 50, wires: 3, plugType: 'G' },
  { country: 'Zimbabwe', code: 'ZW', singlePhase: 220, threePhase: 380, frequency: 50, wires: 3, plugType: 'G' }
];

const features = [
  {
    title: "Single-Phase (V)",
    description:
      "Used in most homes and hotels, single-phase delivers power with two wires (live and neutral). Voltage typically ranges from 100V to 250V depending on the country."
  },
  {
    title: "Three-Phase (V)",
    description:
      "Common in industrial and commercial settings. It uses three live wires plus a neutral, supplying higher and more stable voltage (usually 380V–480V)."
  },
  {
    title: "Frequency (Hz)",
    description:
      "Measures how many times per second alternating current changes direction. The two global standards are 50Hz and 60Hz."
  },
  {
    title: "# of Wires",
    description:
      "Indicates how many conductors carry electricity, excluding ground. Single-phase circuits usually have 2 wires, while three-phase systems may have 3 or 4."
  },
  {
    title: "Plug Type",
    description:
      "Represents the outlet and plug shape used in each country (e.g., Type A, C, G)."
  }
];


export default function CountryVoltageList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'country',
    direction: 'ascending'
  });

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredCountries = countryData.filter(country =>
    country.country.toLowerCase().includes(normalizedSearch)
  );

  const compareByKey = (a: CountryData, b: CountryData) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.direction === 'ascending' ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortConfig.direction === 'ascending'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  };

  const sortedCountries = (() => {
    if (!normalizedSearch) {
      return [...countryData].sort(compareByKey);
    }
    const rankOf = (name: string) => {
      const lower = name.toLowerCase();
      if (lower.startsWith(normalizedSearch)) return 0;
      const words = lower.split(/[\s&,-]+/);
      if (words.some(w => w.startsWith(normalizedSearch))) return 1;
      return 2;
    };
    return [...filteredCountries].sort((a, b) => {
      const rankA = rankOf(a.country);
      const rankB = rankOf(b.country);
      if (rankA !== rankB) return rankA - rankB;
      return compareByKey(a, b);
    });
  })();

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
        className="bg-[var(--foreground)] h-[120px] lg:h-[180px] rounded-[30px] mx-4 relative overflow-hidden"
        style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
      >
        <div className="container h-full flex flex-col justify-end pb-4">
          <h1 className="text-[var(--background)] text-2xl lg:text-4xl">Voltages and Frequencies by Country</h1>
        </div>
      </div>


      {/* Main Content */}
      <main className="container mt-6 mb-20">
        <div className="rounded-xl p-6 lg:p-10">
          <h2 className="text-2xl mb-6 text-[var(--foreground)]">
            Standards Explained
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--background)] p-4 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--foreground)] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                <h3 className="text-lg text-[var(--foreground)] border-b">
                  {feature.title}
                </h3>
                <p className="text-sm mt-2 text-[var(--foreground)]/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Search and Info */}
        <div className="mb-6 lg:mb-8">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-4 lg:mb-6">
            <div className="relative w-full lg:w-1/3">

              <input
              placeholder="Search for a country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg focus:rounded-[15px] transition-all duration-500 text-sm md:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-2 text-[var(--foreground)] hover:text-[var(--foreground)]"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="text-[var(--foreground)] p-3 lg:p-4 rounded-lg text-sm lg:text-base">
              <p>
                <strong>Note:</strong> Some countries may have regional variations. Always verify local standards.
              </p>
            </div>
          </div>
        </div>

        {/* Table/Card Section - updated */}
        <div className="bg-white rounded-lg lg:rounded-xl shadow-md lg:shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-full lg:min-w-[1000px]">

              {/* Header - desktop */}
              <div
                className="hidden lg:grid lg:grid-cols-[10%_30%_10%_10%_10%_15%_15%] bg-gray-50 text-xs text-[var(--foreground)] uppercase tracking-wider"
                role="row"
              >
                <div className="p-2 px-4 py-4 text-center border-b border-gray-200">Flag</div>
                <button
                  onClick={() => requestSort('country')}
                  className="p-2 px-4 py-4 text-left border-b border-gray-200 flex gap-1 lg:gap-2 items-center cursor-pointer"
                >
                  Country
                  {sortConfig.key === 'country' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
                </button>
                <button
                  onClick={() => requestSort('singlePhase')}
                  className="p-2 px-4 py-4 border-b border-gray-200 flex gap-1 lg:gap-2 justify-center cursor-pointer"
                >
                  Single-Phase (V)
                  {sortConfig.key === 'singlePhase' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
                </button>
                <button
                  onClick={() => requestSort('threePhase')}
                  className="p-2 px-4 py-4 border-b border-gray-200 flex gap-1 lg:gap-2 justify-center cursor-pointer"
                >
                  Three-Phase (V)
                  {sortConfig.key === 'threePhase' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
                </button>
                <button
                  onClick={() => requestSort('frequency')}
                  className="p-2 px-4 py-4 border-b border-gray-200 flex gap-1 lg:gap-2 justify-center cursor-pointer"
                >
                  Frequency (Hz)
                  {sortConfig.key === 'frequency' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
                </button>
                <button
                  onClick={() => requestSort('wires')}
                  className="p-2 px-4 py-4 border-b border-gray-200 flex gap-1 lg:gap-2 justify-center cursor-pointer"
                >
                  # of Wires
                  {sortConfig.key === 'wires' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
                </button>
                <button
                  onClick={() => requestSort('plugType')}
                  className="p-2 px-4 py-4 border-b border-gray-200 flex gap-1 lg:gap-2 justify-center cursor-pointer"
                >
                  Plug Type
                  {sortConfig.key === 'plugType' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : null}
                </button>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-200">
                {sortedCountries.map((country, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[20%_80%] lg:grid-cols-[10%_30%_10%_10%_10%_15%_15%] items-center hover:bg-gray-50 transition-colors duration-150 p-2 lg:p-0"
                    role="row"
                  >
                    {/* Flag */}
                    <div className="p-2 lg:px-4 lg:py-3 flex items-center justify-center">
                      <img
                        src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                        alt={`${country.country} flag`}
                        className="inline-block w-6 lg:w-10 object-contain rounded shadow-sm"
                      />
                    </div>

                    {/* Country */}
                    <div className="p-2 lg:px-4 lg:py-3 text-[var(--foreground)] font-medium text-sm lg:text-base truncate">
                      <div className="lg:hidden">{country.country}</div>
                      <div className="hidden lg:block truncate">{country.country}</div>
                    </div>

                    {/* Desktop numbers */}
                    <div className="hidden lg:flex justify-center font-mono text-sm lg:text-base">{country.singlePhase} V</div>
                    <div className="hidden lg:flex justify-center font-mono text-sm lg:text-base">{country.threePhase} V</div>
                    <div className="hidden lg:flex justify-center font-mono text-sm lg:text-base">{country.frequency} Hz</div>
                    <div className="hidden lg:flex justify-center font-mono text-sm lg:text-base">{country.wires}</div>
                    <div className="hidden lg:flex justify-center font-mono text-sm lg:text-base">{country.plugType}</div>

                    {/* Mobile stacked stats - reorganized into two rows: first row has Single-Phase, Three-Phase, Frequency; second row has # of Wires and Plug Type */}
                    <div className="mt-3 lg:hidden col-span-2">
                      <div className="grid grid-cols-3 gap-3 text-sm mb-2">
                        <div className="text-center">
                          <div className="text-[var(--foreground)] text-xs">Single-Phase</div>
                          <div className="font-mono">{country.singlePhase} V</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[var(--foreground)] text-xs">Three-Phase</div>
                          <div className="font-mono">{country.threePhase} V</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[var(--foreground)] text-xs">Frequency</div>
                          <div className="font-mono">{country.frequency} Hz</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="text-center">
                          <div className="text-[var(--foreground)] text-xs">Wires</div>
                          <div className="font-mono">{country.wires}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[var(--foreground)] text-xs">Plug Type</div>
                          <div className="font-mono truncate">{country.plugType}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
