package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Size;
import com.esiee.pizzadelivery.service.SizeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class SizeController {

        private Logger logger = LoggerFactory.getLogger(SizeController.class);

        @Autowired
        private SizeService sizeService;

        @RequestMapping(value="/size/new", method= RequestMethod.POST)
        public Size newTaille(@RequestBody Size size) {
            logger.info("newTaille()");
            logger.info("name :" + size.getName());
            return sizeService.newTaille(size);
        }

        @RequestMapping(value="/size/delete", method= RequestMethod.DELETE)
        public boolean deleteTaille(@RequestParam String name) {
            logger.info("deleteTaille()");
            sizeService.deleteTaille(name);
            return true;
        }

        @RequestMapping(value="/size", method= RequestMethod.GET)
        public Size findTaille(@RequestParam String name) throws Exception {
            logger.info("findTaille()");
            return sizeService.findByName(name);
        }

        @RequestMapping(value="/size/all", method= RequestMethod.GET)
        public List<Size> findAll() throws Exception {
            logger.info("findAll()");
            return sizeService.findAll();
        }
}
