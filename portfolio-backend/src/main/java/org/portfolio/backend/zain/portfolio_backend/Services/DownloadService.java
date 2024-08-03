package org.portfolio.backend.zain.portfolio_backend.Services;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.core.io.Resource;

public interface DownloadService {
    ResponseEntity<Resource> downloadCV() throws IOException;
}
