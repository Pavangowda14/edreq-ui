import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyEmail } from './api/verify';

const VerifyEmail = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleCodeChange = (value) => {
    setCode(value);
    setError(''); // Clear error when user starts typing
  };

  const handleSubmitCode = async () => {
    if (!code) {
      setError("Please enter the verification code.");
      return;
    }
  
    try {
      const data = await verifyEmail(code);
      setSuccess("Email verified successfully! 🎉");
      navigate("/my-courses");
      console.log(data);
    } catch (error) {
      setError("Invalid verification code. Please try again.");
      console.log(error);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Verify Your Email</h2>
        
        <input
          type="number"
          value={code}
          className="w-full border-2 border-gray-300 rounded-lg p-3 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter verification code"
          onChange={(e) => handleCodeChange(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

        <button
          onClick={handleSubmitCode}
          className="w-full bg-blue-600 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-blue-700 transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
