'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/modules', label: 'Modules' },
    { href: '/journal', label: 'Journal' },
    { href: '/assessments', label: 'Assessments' },
  ];

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <div style={{ minHeight: '100vh', background: '#f8faf8' }}>
      {/* Navigation */}
      <nav style={{
        background: '#14532d',
        padding: '0 40px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ 
              color: '#ffffff', 
              fontSize: 18, 
              fontWeight: 500,
              fontFamily: "'Playfair Display', Georgia, serif"
            }}>
              Foundations of <span style={{ color: '#86efac' }}>Positive Psychology</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: 8 }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: isActive(item.href) ? '#86efac' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  fontSize: 15,
                  fontWeight: 500,
                  borderRadius: 6,
                  background: isActive(item.href) ? 'rgba(255,255,255,0.1)' : 'transparent',
                  transition: 'all 0.2s'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Profile */}
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #86efac 0%, #22c55e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#14532d',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer'
          }}>
            S
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}