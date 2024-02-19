import React from 'react';

function PackageTable({ packages, deletePackage, editRow }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {packages.length > 0 ? (
          packages.map((pkg) => (
            <tr key={pkg.id}>
              <td>{pkg.name}</td>
              <td>{pkg.description}</td>
              <td>{pkg.category}</td>
              <td>{pkg.price}</td>
              <td>
                <button onClick={() => editRow(pkg)} className="button muted-button">Edit</button>
                <button onClick={() => deletePackage(pkg.id)} className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No packages</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default PackageTable;
