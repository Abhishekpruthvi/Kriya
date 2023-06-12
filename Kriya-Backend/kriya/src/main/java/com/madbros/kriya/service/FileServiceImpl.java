package com.madbros.kriya.service;

import com.madbros.kriya.exception.BaseServiceException;
import com.madbros.kriya.exception.ErrorCodes;
import com.madbros.kriya.model.File;
import com.madbros.kriya.repository.FileProjection;
import com.madbros.kriya.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

/**
 * @author Abhishek Pruthvi V M
 * @since 23/05/23
 */

@Service
public class FileServiceImpl implements FileService {

    @Autowired
    private FileRepository fileRepository;


    @Override
    public void uploadFile(String fileName, String fileDescription, String ownerName, MultipartFile multipartFile) {

        File file = new File();
        file.setFileName(fileName);
        file.setDescription(fileDescription);
        file.setOwnerName(ownerName);
        try {
            file.setContent(multipartFile.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            throw new BaseServiceException(ErrorCodes.Exception_Codes.INTERNAL_SERVER_ERROR);
        }
        fileRepository.save(file);
    }

    @Override
    public List<FileProjection> getAllFileByOwnerName(String ownerName) {
        return fileRepository.findAllByOwnerName(ownerName);
    }

    @Override
    public File getFileByFileId(Long fileId) {
        return fileRepository.findById(fileId).orElse(null);
    }

    @Override
    public void deleteFileByFileId(Long fileId) {
        fileRepository.deleteById(fileId);
    }


}
