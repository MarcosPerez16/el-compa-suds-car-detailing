// components/ui/table.jsx
import React from 'react';

const Table = ({ children, className = '' }) => {
  return (
    <div className='relative w-full overflow-auto'>
      <table className={`w-full caption-bottom text-sm ${className}`}>
        {children}
      </table>
    </div>
  );
};

const TableHeader = ({ children, className = '' }) => {
  return (
    <thead className={`border-b bg-gray-50/50 ${className}`}>{children}</thead>
  );
};

const TableBody = ({ children, className = '' }) => {
  return <tbody className={`${className}`}>{children}</tbody>;
};

const TableRow = ({ children, className = '' }) => {
  return (
    <tr
      className={`border-b transition-colors hover:bg-gray-50/50 ${className}`}
    >
      {children}
    </tr>
  );
};

const TableHead = ({ children, className = '' }) => {
  return (
    <th
      className={`h-12 px-4 text-left align-middle font-medium text-gray-500 ${className}`}
    >
      {children}
    </th>
  );
};

const TableCell = ({ children, className = '' }) => {
  return <td className={`p-4 align-middle ${className}`}>{children}</td>;
};

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
