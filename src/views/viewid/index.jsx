import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Typography
} from '@mui/material';
import { IconDownload } from '@tabler/icons-react';

// Your images
import User1 from 'assets/images/users/BT.jpg';
import logo from 'assets/images/logo.jpg';
import logo2 from 'assets/images/logo2.jpg';
import { px } from 'framer-motion';

const IDCard = () => {
  const cardRef = useRef(null);

  const handleDownloadPDF = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4'); // portrait, millimeters, A4
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate height based on image aspect ratio
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);
      pdf.save('ID_Card.pdf');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5, bgcolor: '#f0f2f5', minHeight: '100vh' }}>
      {/* Download Button */}
      <Box display="flex" justifyContent="center" mb={3}>
        <Button
          variant="contained"
          startIcon={<IconDownload size={18} />}
          onClick={handleDownloadPDF}
          sx={{
            bgcolor: '#ff005c',
            color: 'white',
            fontWeight: 600,
            px: 4,
            py: 1.2,
            borderRadius: 2,
            boxShadow: 3,
            fontSize: 17,
            '&:hover': { bgcolor: '#e6004c' }
          }}
        >
          Download 
        </Button>
      </Box>

      <div ref={cardRef}>
        {/* ID Card */}
        <Box sx={{ mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 7,
              width: '75%',
              minHeight: 230,
              mb: 3,
              overflow: 'visible',
              border: '1px solid black',
              mt: 9
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
              {/* Left section */}
              <Box
                sx={{
                  width: 150,
                  borderRight: '1px solid #d6dbe3',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  bgcolor: '#f9f9f9'
                }}
              >
                
                <img src={logo} alt="Company Logo" width="150" height={35} style={{ marginBottom: 10 }} />
                <Avatar src={User1} sx={{ width: 80, height: 80, border: "2px solid #2294e1",mb: 2.9,mt:2 }} />
                 
                <Typography fontWeight="bold" color="#7a269f" fontSize={15}>
                  Bhavik Thakkar
                </Typography>
                
                <Typography variant="caption" fontSize={12}>Service Provider ID:</Typography>
                <Typography variant="caption" fontWeight="bold" fontSize={13}>532</Typography>
              </Box>

              {/* Right section */}
              <Box sx={{ flex: 1, position: 'relative' }}>
                {/* Header Bar */}
                <Box
                  sx={{
                    bgcolor: '#000',
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: 900,
                    fontSize: 13.5,
                    letterSpacing: 0.2,
                    mb: 1.5,
                    width: 262,
                    height: 35,
                    p: 0.9
                  }}
                >
                  BLUECHIP CARES PRIVATE LIMITED
                </Box>

                {/* Title */}
                <Box sx={{ mb: 1 }}>
                  <Typography fontSize={14} fontWeight="bold" color="#8103A8" textAlign="center">
                    FREELANCER IDENTITY CARD
                  </Typography>
                  <Typography fontSize={11} textAlign="right" color="#316">
                    ( <span style={{ color: "#0166d4" }}>Not an Employee</span> )
                  </Typography>
                </Box>

                {/* Info Section */}
            

                <Box sx={{ fontSize: 2, px: 1, color: 'black' }}>
  <Typography sx={{ mt: 0.6, fontSize: '11px', lineHeight: '2' }}>
    <strong>
      AADHAR CARD NO <span style={{ paddingLeft: '6px', paddingRight: '6px' }}>:</span> 6006-9317-2151
    </strong>
  </Typography>

  <Typography sx={{ mt: 0.6, fontSize: '11px', lineHeight: '2' }}>
    <strong>
      SERVICE VALIDITY <span style={{ paddingLeft: '6px', paddingRight: '6px' }}>:</span> 04-08-2026
    </strong>
  </Typography>


   <Typography
    sx={{
      mt: 0.6,
      fontSize: '11px',
      lineHeight: '2',
      display: 'flex',
      alignItems: 'flex-start'
    }}
  >
    <strong style={{ whiteSpace: 'nowrap' }}>
      LOCATION <span style={{ paddingLeft: '50px', paddingRight: '6px' }}>:</span>
    </strong>
    <span style={{ display: 'inline-block', paddingLeft: '4px', color: 'black', fontWeight: 850 }}>
      A7 Vishal Nagar
    </span>
  </Typography>
</Box>


                {/* Stamp and Signature */}
               
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'flex-end', mt: 3 }}>
       <Avatar src={logo2} sx={{ width: 45, height: 38, mb: 0.5, marginRight: 10 }} alt="Official Stamp" />
       <Typography variant="caption" color="#787C8C">
         Signature of Issuing Authority
       </Typography>
     </Box>
              </Box>
            </Box>
          </Card>

          {/* Instructions */}
          <Card sx={{ borderRadius: 2, boxShadow: 7, width: '75%', height: '60%', border: '1px solid black' }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <img src={logo} alt="Company Logo" width="150" height={35} style={{ marginBottom: 10 }} />
              </Box>
              <Box
                sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 900,
                  fontSize: 13.5,
                  letterSpacing: 0.2,
                  py: 0.6,
                  mb: 1.8,
                  width: 280,
                  height: 35,

                 
                }}
              >
                BLUECHIP CARES PRIVATE LIMITED
              </Box>
            </Box>

            <Box padding={1}>
              <Typography fontSize={9.5} fontWeight="bold" color="#000" mb={1}>
                IMPORTANT INSTRUCTIONS:
              </Typography>
              <Typography variant="body2" fontSize={13.2} mb={0.8}>
                This is a system-generated ID card based on the Aadhar card provided.
              </Typography>
              <Typography variant="body2" fontSize={13.2} mb={2}>
                Always carry your ID card while on duty. Present it along with your Aadhar card when asked.
              </Typography>

              <Divider sx={{ borderColor: 'black' }} />

              <Typography variant="caption" fontSize={12.5} color="#333" lineHeight={1.6}>
                <strong>OFFICE:</strong> Atlantis Corporate Park, 508, 5th Floor,
                Opposite Airtel Office, Beside Hotel Laalbagh, Ring Road No.1,
                Telibandha, Raipur, Chhattisgarh – 492001
              </Typography>
            </Box>
          </Card>
        </Box>
      </div>
    </Container>
  );
};

export default IDCard;