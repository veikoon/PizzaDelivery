package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Staff;
import com.esiee.pizzadelivery.service.StaffService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RestController
public class StaffController {

        private Logger logger = LoggerFactory.getLogger(StaffController.class);

        @Autowired
        private StaffService staffService;

        @RequestMapping(value="/staff/new", method= RequestMethod.POST)
        public Staff newLivreur(@RequestBody Staff staff) {
            logger.info("newStaff()");
            return staffService.newStaff(staff);
        }

        @RequestMapping(value="/staff/delete", method= RequestMethod.DELETE)
        public boolean deleteLivreur(@RequestParam String name) {
            logger.info("deleteLivreur()");
            staffService.deleteLivreur(name);
            return true;
        }

        @RequestMapping(value="/staff", method= RequestMethod.GET)
        public Staff findLivreur(@RequestParam String name) throws Exception {
            logger.info("findLivreur()");
            return staffService.findByName(name);
        }

        @RequestMapping(value="/staff/all", method= RequestMethod.GET)
        public List<Staff> findAll() throws Exception {
            logger.info("findAll()");
            return staffService.findAll();
        }
}
