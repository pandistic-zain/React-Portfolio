package org.portfolio.backend.zain.portfolio_backend.Services;

import java.io.IOException;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class DownloadServicesImplementation implements DownloadService {

    @Override
    public ResponseEntity<Resource> downloadCV() throws IOException {
        ClassPathResource resource = new ClassPathResource("static/cv/zain_cv.pdf");
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=zain_cv.pdf");
        headers.add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_PDF_VALUE);
        
        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }
}
