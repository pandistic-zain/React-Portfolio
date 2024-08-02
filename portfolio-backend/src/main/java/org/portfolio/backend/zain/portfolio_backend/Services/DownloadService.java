package org.portfolio.backend.zain.portfolio_backend.Services;

import java.io.IOException;

import org.springframework.http.ResponseEntity;

public interface DownloadService {
     ResponseEntity<byte[]> getCV() throws IOException;
}
