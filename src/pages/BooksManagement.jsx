import React, { useState } from 'react';

const initialBooks = [
  { id: "837462911", title: "Hamlet", author: "Victor Hugo", condition: "New", price: 150 },
  { id: "837462912", title: "Pride and Prejudice", author: "Jane Austen", condition: "Used", price: 140 },
  { id: "837462913", title: "The Great Gatsby", author: "F. Scott Fitzgerald", condition: "Used", price: 245 },
  { id: "837462915", title: "1984", author: "George Orwell", condition: "Used", price: 95 },
  { id: "837462916", title: "To Kill a Mockingbird", author: "Harper Lee", condition: "New", price: 130 },
  { id: '837462917', title: 'The Catcher in the Rye', author: 'J.D. Salinger', condition: 'Used', price: 200 },
  { id: '837462918', title: 'Moby Dick', author: 'Herman Melville', condition: 'New', price: 1500 },
  { id: '837462919', title: 'Brave New World', author: 'Aldous Huxley', condition: 'Used', price: 185 },
  { id: '837462920', title: 'The Odyssey', author: 'Homer', condition: 'New', price: 130 },
  { id: '837462921', title: 'To the Lighthouse', author: 'Virginia Woolf', condition: 'Used', price: 110 },
  { id: '837462922', title: 'Yaprak Dökümü', author: 'Reşat Nuri Güntekin', condition: 'New', price: 170 },
  { id: '837462923', title: 'Leyla ve Mecnun', author: 'Fuzuli', condition: 'Used', price: 180 },
  { id: '837462924', title: 'Anna Karenina', author: 'Leo Tolstoy', condition: 'New', price: 165 },
  { id: '837462925', title: 'Don Quixote', author: 'Miguel de Cervantes', condition: 'Used', price: 140 },
  { id: '837462926', title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', condition: 'New', price: 185 },
];

function BooksManagement() {
  const [books, setBooks] = useState(initialBooks);
  const [selectedReasons, setSelectedReasons] = useState({});
  const [modalBookId, setModalBookId] = useState(null);
  const [bookStatus, setBookStatus] = useState({}); 

  const reasonsOptions = [
    "Price too high",
    "Title and author mismatched",
  ];

  const handleReasonChange = (bookId, reason) => {
    setSelectedReasons((prev) => {
      const prevReasons = prev[bookId] || [];
      let newReasons = [];

      if (prevReasons.includes(reason)) {
        newReasons = prevReasons.filter(r => r !== reason);
      } else {
        newReasons = [...prevReasons, reason];
      }

      return {
        ...prev,
        [bookId]: newReasons,
      };
    });
  };

  const handleApprove = (bookId) => {
    setBookStatus((prev) => ({ ...prev, [bookId]: 'approved' }));
  };

  const handleReject = () => {
    if (!modalBookId) return;
    const reasons = selectedReasons[modalBookId];
    if (!reasons || reasons.length === 0) {
      alert("Please select at least one rejection reason.");
      return;
    }
    setBookStatus((prev) => ({ ...prev, [modalBookId]: 'rejected' }));
    setSelectedReasons((prev) => {
      const newSel = { ...prev };
      delete newSel[modalBookId];
      return newSel;
    });
    setModalBookId(null);
  };

  const openRejectModal = (bookId) => {
    setModalBookId(bookId);
  };

  const closeRejectModal = () => {
    setModalBookId(null);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Books Management</h1>
      {books.length === 0 ? (
        <p>No books to review.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ddd' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Title</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Author</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Condition</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Price</th>
              <th style={{ textAlign: 'center', padding: '10px' }}>Actions</th>
              <th style={{ textAlign: 'center', padding: '10px', width: '120px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => {
              const status = bookStatus[book.id];
              const isDisabled = !!status;

              return (
                <tr key={book.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>{book.title}</td>
                  <td style={{ padding: '10px' }}>{book.author}</td>
                  <td style={{ padding: '10px' }}>{book.condition}</td>
                  <td style={{ padding: '10px' }}>₺{book.price}</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>
                    <button
                      disabled={isDisabled}
                      onClick={() => handleApprove(book.id)}
                      style={{
                        marginRight: '10px',
                        padding: '5px 12px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: isDisabled ? 'default' : 'pointer',
                        opacity: isDisabled ? 0.5 : 1,
                      }}
                    >
                      Approve
                    </button>
                    <button
                      disabled={isDisabled}
                      onClick={() => openRejectModal(book.id)}
                      style={{
                        padding: '5px 12px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: isDisabled ? 'default' : 'pointer',
                        opacity: isDisabled ? 0.5 : 1,
                      }}
                    >
                      Reject
                    </button>
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', fontStyle: 'italic', color: status === 'approved' ? 'green' : status === 'rejected' ? 'red' : 'inherit' }}>
                    {status ? (status === 'approved' ? 'Approved' : 'Rejected') : ''}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {/* Modal */}
      {modalBookId && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '20px',
            minWidth: '320px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}>
            <h3>Reject Reasons</h3>
            {reasonsOptions.map(reason => (
              <label key={reason} style={{ display: 'block', marginBottom: '8px' }}>
                <input
                  type="checkbox"
                  checked={selectedReasons[modalBookId]?.includes(reason) || false}
                  onChange={() => handleReasonChange(modalBookId, reason)}
                  style={{ marginRight: '8px' }}
                />
                {reason}
              </label>
            ))}
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button
                onClick={closeRejectModal}
                style={{
                  marginRight: '10px',
                  padding: '6px 14px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                style={{
                  padding: '6px 14px',
                  borderRadius: '5px',
                  border: 'none',
                  backgroundColor: '#f44336',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BooksManagement;
