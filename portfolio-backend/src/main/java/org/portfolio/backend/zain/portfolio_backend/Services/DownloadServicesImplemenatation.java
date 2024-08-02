package org.portfolio.backend.zain.portfolio_backend.Services;

import java.io.IOException;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class DownloadServicesImplemenatation implements DownloadService{

    @Override
    public ResponseEntity<byte[]> getCV() throws IOException {

         // Locate the CV file in the classpath
        ClassPathResource pdfFile = new ClassPathResource("static/zain_cv.pdf");

        // Read the file content into a byte array
        byte[] pdfBytes = pdfFile.getInputStream().readAllBytes();

        // Set the HTTP headers for the response
        HttpHeaders headers = new HttpHeaders();
        headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=zain_cv.pdf");
        headers.setContentType(MediaType.APPLICATION_PDF);

        // Return the file content with headers and OK status
        return ResponseEntity.ok()
                .headers(headers)
                .body(pdfBytes);
    }

    
}
