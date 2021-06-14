package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.DTO.PizzaDTO;
import com.esiee.pizzadelivery.model.Pizza;
import com.esiee.pizzadelivery.service.PizzaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class PizzaController {

        private Logger logger = LoggerFactory.getLogger(com.esiee.pizzadelivery.controller.PizzaController.class);

        @Autowired
        private PizzaService pizzaService;

        @RequestMapping(value="/pizza/new", method= RequestMethod.POST)
        public Pizza newPizza(@RequestBody PizzaDTO pizzaDTO) {
            logger.info("newPizza()");
            return pizzaService.newPizza(pizzaDTO);
        }

        @RequestMapping(value="/pizza/delete", method= RequestMethod.DELETE)
        public boolean deletePizza(@RequestParam String name) {
            logger.info("deletePizza()");
            pizzaService.deletePizza(name);
            return true;
        }

        @RequestMapping(value="/pizza", method= RequestMethod.GET)
        public Pizza findPizza(@RequestParam String name) throws Exception {
            logger.info("findPizza()");
            return pizzaService.findByName(name);
        }

        @RequestMapping(value="/pizza/all", method= RequestMethod.GET)
        public List<Pizza> findAll() throws Exception {
            logger.info("findAll()");
            return pizzaService.findAll();
        }
}
