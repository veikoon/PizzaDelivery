package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Size;
import com.esiee.pizzadelivery.repository.SizeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SizeService {

    @Autowired
    private SizeRepository sizeRepository;

    public Size newTaille(Size size){
        sizeRepository.save(size);
        return size;
    }

    public void deleteTaille(String name){
        sizeRepository.delete(sizeRepository.findByName(name));
    }

    public Size findByName(String name){
        return sizeRepository.findByName(name);
    }

    public List<Size> findAll(){
        return sizeRepository.findAll();
    }
}
