package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Client;
import com.esiee.pizzadelivery.service.ClientService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RestController
public class ClientController {

        private Logger logger = LoggerFactory.getLogger(ClientController.class);

        @Autowired
        private ClientService clientService;

        @RequestMapping(value="/client/new", method= RequestMethod.POST)
        public Client newClient(@RequestBody Client client) {
            logger.info("newClient()");
            logger.info("name :" + client.getName());
            return clientService.newClient(client);
        }

        @RequestMapping(value="/client/delete", method= RequestMethod.DELETE)
        public boolean deleteClient(@RequestParam String name) {
            logger.info("deleteClient()");
            clientService.deleteClient(name);
            return true;
        }

        @RequestMapping(value="/client", method= RequestMethod.GET)
        public Client findClient(@RequestParam String name) throws Exception {
            logger.info("findClient()");
            return clientService.findByName(name);
        }

        @RequestMapping(value="/client/all", method= RequestMethod.GET)
        public List<Client> findAll() throws Exception {
            logger.info("findAll()");
            return clientService.findAll();
        }

        @RequestMapping(value="/client/balance", method= RequestMethod.POST)
        public void setBalance(@RequestParam String name, @RequestParam float balance) throws Exception {
            logger.info("setBalance()");
            clientService.setBalance(name, balance);
        }

        @RequestMapping(value="/client/total", method= RequestMethod.POST)
        public void setTotalFacturation(@RequestParam String name, @RequestParam float total) throws Exception {
            logger.info("setTotalFacturation()");
            clientService.setTotal(name, total);
        }

        @RequestMapping(value="/client/order", method= RequestMethod.POST)
        public void setNbOrder(@RequestParam String name, @RequestParam int order) throws Exception {
            logger.info("setNbOrder()");
            clientService.setOrder(name, order) ;
        }
}
