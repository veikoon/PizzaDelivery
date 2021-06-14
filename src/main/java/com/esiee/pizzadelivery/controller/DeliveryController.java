package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.DTO.DeliveryDTO;
import com.esiee.pizzadelivery.model.Delivery;
import com.esiee.pizzadelivery.service.DeliveryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class DeliveryController {

        private Logger logger = LoggerFactory.getLogger(DeliveryController.class);

        @Autowired
        private DeliveryService deliveryService;

        @RequestMapping(value="/livraison/new", method= RequestMethod.POST)
        public Delivery newLivraison(@RequestBody DeliveryDTO deliveryDTO) {
            logger.info("newLivraison()");
            return deliveryService.newLivraison(deliveryDTO);
        }

        @RequestMapping(value="/livraison/all", method= RequestMethod.GET)
        public List<Delivery> findAll() throws Exception {
            logger.info("findAll()");
            return deliveryService.findAll();
        }
}
