import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBell, FiGrid, FiBookOpen, FiUsers, FiBarChart2, FiSettings } from 'react-icons/fi';

const allBooks = [

  {
    id: "182731907", title: "Crime and Punishment", author: "Fyodor Dostoevsky", condition: "Like New", price: 245,
  },
  {
    id: "827361928", title: "Les Miserables", author: "Victor Hugo", condition: "Used", price: 180,
  },
  {
    id: "938172364", title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", condition: "Like New", price: 210,
  },
  {
    id: "102938475", title: "The Broken Saint", author: "Mike Markel", condition: "Used", price: 140,
  },
  {
    id: "564738291", title: "Summer of Night", author: "Dan Simmons", condition: "Like New", price: 165,
  },
  {
    id: "837462910", title: "War and Peace", author: "Leo Tolstoy", condition: "Used", price: 300,
  },
  {
    id: "748291034", title: "Martin Eden", author: "Jack London", condition: "Like New", price: 190,
  },
  {
    id: "918273645", title: "Jane Eyre", author: "Charlotte Brontë", condition: "Used", price: 160,
  },
  {
    id: "736291847", title: "İnce Memed", author: "Yaşar Kemal", condition: "Like New", price: 130,
  },
  {
    id: "384756192", title: "The Lily of the Valley", author: "Honoré de Balzac", condition: "Used", price: 155,
  },
  // Ekstra kitaplar
  {
    id: "998877665", title: "The Trial", author: "Franz Kafka", condition: "Used", price: 200,
  },
  {
    id: "112233445", title: "Siddhartha", author: "Hermann Hesse", condition: "Like New", price: 180,
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    "3 books are pending approval",
    "1 book was rejected",
    "New user signed up",
    "Book report submitted",
    "System backup completed",
    "Inventory updated",
    "New message from support",
    "1 book was approved"
  ];

  const handleSidebarClick = (item) => {
    if (item === 'Books Management') {
      navigate('/books-management');
    } else {
      alert(`${item} clicked`);
    }
  };

  const totalBooks = 1485;
  const approvedBooks = 985;
  const rejectedBooks = 250;
  const pendingBooks = 250;

  const sidebarItems = [
    { icon: <FiGrid />, label: 'Dashboard' },
    { icon: <FiBookOpen />, label: 'Books Management' },
    { icon: <FiUsers />, label: 'Users Management' },
    { icon: <FiBarChart2 />, label: 'Reports' },
    { icon: <FiSettings />, label: 'Settings' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f5f5f5', fontFamily: 'Arial' }}>

      {/* Sidebar */}
      <div style={{
        width: '240px',
        backgroundColor: '#ffffff',
        padding: '20px',
        boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1E90FF', marginBottom: '4px' }}>EMU R BOOKS</h1>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>Admin Panel</p>
        {sidebarItems.map((item, i) => (
          <button
            key={i}
            onClick={() => handleSidebarClick(item.label)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
              background: 'none',
              border: 'none',
              color: '#1E90FF',
              fontWeight: '500',
              cursor: 'pointer',
              padding: '6px 4px',
            }}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>

        {/* Top Right Admin and Notifications */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '25px', position: 'relative' }}>
          <div style={{ position: 'relative', marginRight: '16px', cursor: 'pointer' }} onClick={() => setShowNotifications(!showNotifications)}>
            <FiBell size={22} color="#FF4136" />
            <span style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              backgroundColor: '#FF4136',
              color: 'white',
              borderRadius: '50%',
              width: '16px',
              height: '16px',
              fontSize: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>8</span>
            {showNotifications && (
              <div style={{
                position: 'absolute',
                top: '30px',
                right: 0,
                width: '260px',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '10px'
              }}>
                {notifications.map((note, idx) => (
                  <div key={idx} style={{
                    padding: '6px 0',
                    borderBottom: idx !== notifications.length - 1 ? '1px solid #eee' : 'none',
                    fontSize: '14px',
                    color: '#333'
                  }}>{note}</div>
                ))}
              </div>
            )}
          </div>
          <img src="/admin-profile.png" alt="Admin" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
        </div>

        {/* Stats Boxes */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <div style={{ backgroundColor: '#1E90FF', color: '#fff', padding: '20px', borderRadius: '12px', flex: 1 }}>
            <p>Total Books</p>
            <h2 style={{ fontSize: '24px' }}>{totalBooks}</h2>
          </div>
          <div style={{ backgroundColor: '#28A745', color: '#fff', padding: '20px', borderRadius: '12px', flex: 1 }}>
            <p>Approved Books</p>
            <h2 style={{ fontSize: '24px' }}>{approvedBooks}</h2>
          </div>
          <div style={{ backgroundColor: '#FFC107', color: '#fff', padding: '20px', borderRadius: '12px', flex: 1 }}>
            <p>Pending Approval</p>
            <h2 style={{ fontSize: '24px' }}>{pendingBooks}</h2>
          </div>
          <div style={{ backgroundColor: '#DC3545', color: '#fff', padding: '20px', borderRadius: '12px', flex: 1 }}>
            <p>Rejected Books</p>
            <h2 style={{ fontSize: '24px' }}>{rejectedBooks}</h2>
          </div>
        </div>

        {/* Table Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Recently Added</h3>
          <button style={{
            backgroundColor: '#FFA500',
            color: '#fff',
            padding: '8px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
          }}>
            View All
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', backgroundColor: '#fff', borderCollapse: 'collapse', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <thead style={{ backgroundColor: '#eee', textAlign: 'left' }}>
              <tr>
                <th style={{ padding: '10px' }}>Owner ID</th>
                <th style={{ padding: '10px' }}>Book Title</th>
                <th style={{ padding: '10px' }}>Author</th>
                <th style={{ padding: '10px' }}>Condition</th>
                <th style={{ padding: '10px' }}>Price (₺)</th>
              </tr>
            </thead>
            <tbody>
              {allBooks.map((book, index) => (
                <tr key={index} style={{ borderTop: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>{book.id}</td>
                  <td style={{ padding: '10px' }}>{book.title}</td>
                  <td style={{ padding: '10px' }}>{book.author}</td>
                  <td style={{ padding: '10px' }}>{book.condition}</td>
                  <td style={{ padding: '10px' }}>{book.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
