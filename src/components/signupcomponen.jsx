import { useState } from "react";
export default function Signupcomp({ label, type }) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input
          type={type}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    );
  }