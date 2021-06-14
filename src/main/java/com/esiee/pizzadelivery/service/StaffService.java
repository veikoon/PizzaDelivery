package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Staff;
import com.esiee.pizzadelivery.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffService {

    @Autowired
    private StaffRepository staffRepository;

    public Staff newLivreur(Staff staff){
        staffRepository.save(staff);
        return staff;
    }

    public void deleteLivreur(String name){
        staffRepository.deleteByName(name);
    }

    public Staff findByName(String name){
        return staffRepository.findByName(name);
    }

    public List<Staff> findAll(){
        return staffRepository.findAll();
    }
}
