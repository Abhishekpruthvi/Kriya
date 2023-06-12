package com.madbros.kriya.service;

import com.madbros.kriya.model.File;
import com.madbros.kriya.repository.FileProjection;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @author Abhishek Pruthvi V M
 * @since 23/05/23
 */
public interface FileService {

    void uploadFile(String fileName, String fileDescription, String ownerName, MultipartFile multipartFile);

    List<FileProjection> getAllFileByOwnerName(String ownerName);

    File getFileByFileId(Long fileId);

    void deleteFileByFileId(Long fileId);
}
